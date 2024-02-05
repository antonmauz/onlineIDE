package edu.tum.ase.compiler;

import edu.tum.ase.compiler.model.SourceCode;
import edu.tum.ase.compiler.service.CompilerService;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.api.AfterEach;
import java.io.File;

@ExtendWith(SpringExtension.class)
@SpringBootTest
class CompilerServiceTest {

    @Autowired
    private CompilerService compilerService;

   @AfterEach
    void tearDown() {
        deleteCompiledFile("HelloWorld1.class");
        deleteCompiledFile("Test1.class");
    }

    private void deleteCompiledFile(String fileName) {
        String compiledFilesDirectory = "compiled";
        File compiledFile = new File(compiledFilesDirectory, fileName);
        if (compiledFile.exists()) {
             boolean deleted = compiledFile.delete();
            if (!deleted) {
                System.err.println("Failed to delete " + compiledFile.getAbsolutePath());
            }
        }
    }

    @Test
    void should_ReturnError_When_FileTypeIsNotSupported() {
        // Arrange
        SourceCode sourceCode = new SourceCode();
        sourceCode.setFileName("unsupported_file.txt");
        sourceCode.setCode("This is some content that should not matter for this test.");

        // Act
        SourceCode result = compilerService.compile(sourceCode);

        // Assert
        assertEquals("File type not supported", result.getStderr());
        assertFalse(result.isCompilable());
    }

    @Test
    void should_CreateTempFile_When_FileTypeIsSupported() {
        // Arrange
        SourceCode sourceCode = new SourceCode();
        sourceCode.setFileName("Test1.java");
        sourceCode.setCode("public class Test1 {}");

        // Act
        SourceCode result = compilerService.compile(sourceCode);

        // Assert
        assertEquals("", result.getStderr(), "Expected no error message when file type is supported");
    }

    @Test
    void should_SetCompilableTrue_When_FileTypeIsSupportedAndCompilationSucceeds() {
        // Arrange
        SourceCode sourceCode = new SourceCode();
        sourceCode.setFileName("HelloWorld1.java");
        sourceCode.setCode("public class HelloWorld1 { public static void main(String[] args) { System.out.println(\"Hello, World!\"); } } ");

        // Act
        SourceCode result = compilerService.compile(sourceCode);

        // Assert
        assertTrue(result.isCompilable(), "Expected compilable to be true when compilation succeeds");
        assertEquals("", result.getStderr(), "Expected no error message when compilation succeeds");
        
    }
    
}
