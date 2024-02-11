package edu.tum.ase.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;

import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.fasterxml.jackson.databind.ObjectMapper;

import edu.tum.ase.project.model.Project;
import edu.tum.ase.project.repository.ProjectRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

@ContextConfiguration(classes = ProjectApplication.class)
@SpringBootTest
@AutoConfigureMockMvc
public class ProjectE2ERestTest {

    private final String URL = "/projects";

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private MockMvc systemUnderTest;

    @Autowired
    private ProjectRepository projectRepository;

    @AfterEach
    public void tearDown() {
        projectRepository.deleteAll();
    }

    @Test
    public void should_ReturnProject_When_PostWithProject() throws Exception {
        // given
        Project project = new Project("Test-project");
        Project createdProject = projectRepository.save(project);

        // when
        ResultActions result = systemUnderTest.perform(post(URL)
                .content(objectMapper.writeValueAsString(project))
                .contentType(MediaType.APPLICATION_JSON));

        // then
        result.andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").value(createdProject.getId()))
                .andExpect(MockMvcResultMatchers.jsonPath("$.name").value(createdProject.getName()));
                
    }
}