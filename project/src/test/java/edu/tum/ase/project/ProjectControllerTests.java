package edu.tum.ase.project.controller;

import edu.tum.ase.project.model.Project;
import edu.tum.ase.project.service.ProjectService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class ProjectControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ProjectService projectService;

    @Test
    void should_CreateProject_When_PostRequestMade() throws Exception {
        // Given
        Project project = new Project();
        project.setName("New Project");
        given(projectService.createProject(any(Project.class))).willReturn(project);

        // When
        ResultActions result = mockMvc.perform(post("/projects")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"name\":\"New Project\"}"));

        // Then
        result.andExpect(status().isOk());
    }

    @Test
    void should_GetAllProjects_When_GetRequestMade() throws Exception {
        // Given
        // (Setup any preconditions, if there are any)

        // When
        ResultActions result = mockMvc.perform(get("/projects")
                .contentType(MediaType.APPLICATION_JSON));

        // Then
        result.andExpect(status().isOk());
    }
}
