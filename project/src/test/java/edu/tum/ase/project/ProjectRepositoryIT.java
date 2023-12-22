package edu.tum.ase.project.repository;
import edu.tum.ase.project.ProjectApplication;


import edu.tum.ase.project.model.Project;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.test.context.ActiveProfiles;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.junit.jupiter.api.extension.ExtendWith;


@ExtendWith(SpringExtension.class)
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