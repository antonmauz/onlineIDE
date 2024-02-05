package edu.tum.ase.compiler;

import edu.tum.ase.compiler.model.SourceCode;
import edu.tum.ase.compiler.service.CompilerService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class CompilerControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CompilerService compilerService;

    @Test
    void shouldCompileSourceCode() throws Exception {
        SourceCode sourceCode = new SourceCode();
        sourceCode.setFileName("test.java");
        sourceCode.setCode("public class Test {}");

        given(compilerService.compile(sourceCode)).willReturn(sourceCode);

        mockMvc.perform(post("/compile")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"fileName\":\"test.java\",\"code\":\"public class Test {}\"}"))
                .andExpect(status().isOk()); 
                  
    }


}