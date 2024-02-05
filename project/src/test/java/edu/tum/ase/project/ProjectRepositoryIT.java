package edu.tum.ase.project;

import edu.tum.ase.project.model.Project;
import edu.tum.ase.project.repository.ProjectRepository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class ProjectRepositoryIT {

    @Autowired
    private ProjectRepository projectRepository;

    @BeforeEach
    void setUp() {
        projectRepository.deleteAll();
    }

    @Test
    void should_ReturnProject_When_QueriedByName() {
        // Given
        String projectName = "Test Project";
        Project savedProject = new Project(projectName);
        projectRepository.save(savedProject);

        // When
        Project foundProject = projectRepository.findByName(projectName);

        // Then
        assertThat(foundProject).isNotNull();
        assertThat(foundProject.getName()).isEqualTo(projectName);
    }

    @Test
    void should_ReturnNull_When_ProjectDoesNotExist() {
        // Given
        String nonExistentProjectName = "NonExistentProject";

        // When
        Project foundProject = projectRepository.findByName(nonExistentProjectName);

        // Then
        assertThat(foundProject).isNull();
        
    }
}