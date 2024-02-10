package edu.tum.ase.compiler.service;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Arrays;
import org.springframework.stereotype.Service;

import edu.tum.ase.compiler.model.SourceCode;

@Service
public class CompilerService {
    String[] acceptedFileTypes = {
            "java",
            "c"
    };

    private boolean validateFileType(String fileType) {
        return Arrays.asList(acceptedFileTypes).contains(fileType);
    }

    private String getFileType(String fileName) {
        return fileName.substring(fileName.lastIndexOf(".") + 1);
    }

    public SourceCode compile(SourceCode sourceCode) {
        String fileType = getFileType(sourceCode.getFileName());
        if (!validateFileType(fileType)) {
            sourceCode.setStderr("File type not supported");
            return sourceCode;
        }

        File tempFile = createTempFile(sourceCode.getFileName(), fileType);
        if (tempFile == null) {
            sourceCode.setStderr("Error creating temp file");
            return sourceCode;
        }
        try (FileWriter writer = new FileWriter(tempFile)) {
            writer.write(sourceCode.getCode());
        } catch (IOException e) {
            sourceCode.setStderr("Error writing to temp file");
            return sourceCode;
        }

        // Determine compiler command and compile
        try {
            String[] command = determineCompilerCommand(tempFile.getAbsolutePath(), fileType);
            ProcessBuilder processBuilder = new ProcessBuilder(command);
            Process process = processBuilder.start();

            // Capture stdout and stderr
            String stdout = readStream(process.getInputStream());
            String stderr = readStream(process.getErrorStream());
            process.waitFor(); // Wait for the process to complete

            //Strip the temp file name from the output
            stdout = stdout.replace(tempFile.getAbsolutePath(), sourceCode.getFileName());
            stderr = stderr.replace(tempFile.getAbsolutePath(), sourceCode.getFileName());

            sourceCode.setStdout(stdout);
            sourceCode.setStderr(stderr);
            sourceCode.setCompilable(process.exitValue() == 0);
        } catch (IOException | InterruptedException e) {
            sourceCode.setStderr("Compilation error: " + e.getMessage());
        } finally {
            // Delete temp file if needed
            tempFile.delete();
        }
        return sourceCode;
    }

    private File createTempFile(String fileName, String fileType) {
        try {
            // Extract the base file name without extension
            String baseFileName = fileName.substring(0, fileName.lastIndexOf("."));

            // Create a directory to hold the temporary file
            File tempDir = new File(System.getProperty("java.io.tmpdir"), "compilerTemp");
            if (!tempDir.exists()) {
                tempDir.mkdir();
            }

            // Create the temporary file with the exact name
            File tempFile = new File(tempDir, baseFileName + "." + fileType);
            return tempFile;

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    /**
     * Determines the compiler command based on the file type of the source code
     * file.
     *
     * @param filePath The path to the source code file.
     * @param fileType The file type of the source code file.
     * @return The compiler command based on the file type.
     */
    private String[] determineCompilerCommand(String filePath, String fileType) {
        if ("java".equals(fileType)) {
            return new String[] { "javac", filePath };
        }
        return new String[] { "gcc", "-o", filePath + ".exe", filePath };
    }

    /**
     * Reads the stream into a string
     * 
     * @param stream
     * @return the string
     * @throws IOException
     */
    private String readStream(InputStream stream) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(stream));
        StringBuilder builder = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            builder.append(line).append("\n");
        }
        return builder.toString();
    }
}

