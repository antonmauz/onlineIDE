package edu.tum.ase.compiler;

import edu.tum.ase.compiler.model.SourceCode;
import edu.tum.ase.compiler.service.CompilerService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class CompilerServiceTest {

    private CompilerService compilerService;

    @BeforeEach
    void setUp() {
        compilerService = new CompilerService();
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
        sourceCode.setFileName("Test.java");
        sourceCode.setCode("public class Test {}");

        // Act
        SourceCode result = compilerService.compile(sourceCode);

        // Assert
        assertEquals("", result.getStderr(), "Expected no error message when file type is supported");
        assertTrue(result.isCompilable(), "Expected compilable to be true when temp file is successfully created");
    }

    @Test
    void should_SetCompilableTrue_When_FileTypeIsSupportedAndCompilationSucceeds() {
        // Arrange
        SourceCode sourceCode = new SourceCode();
        sourceCode.setFileName("HelloWorld.java");
        sourceCode.setCode("public class HelloWorld { public static void main(String[] args) { System.out.println(\"Hello, World!\"); } }");

        // Act
        SourceCode result = compilerService.compile(sourceCode);

        // Assert
        assertTrue(result.isCompilable(), "Expected compilable to be true when compilation succeeds");
        assertEquals("", result.getStderr(), "Expected no error message when compilation succeeds");
    
    }
}
