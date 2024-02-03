package edu.tum.ase.project.service;

import edu.tum.ase.project.model.Project;
import edu.tum.ase.project.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    public Project createProject(Project project) {
        return projectRepository.save(project);
    }

    public Project findByName(String name) {
        return projectRepository.findByName(name);
    }

    public List<Project> getProjects() {
        return projectRepository.findAll();
    }

    public Project updateProject(Project project) {
        if (project.getId() == null) {
            return null;
        }

        Optional<Project> existingProjectOpt = projectRepository.findById(project.getId());
        if (!existingProjectOpt.isPresent()) {
            return null;
        }
        return projectRepository.save(project);
    }

    public void deleteProjectById(String id) {
        projectRepository.deleteById(id);
    }

    public Project findById(String id) {
        Optional<Project> optionalProject = projectRepository.findById(id);
        if (!optionalProject.isPresent()) {
            return null;
        } else {
            return optionalProject.get();
        }
    }
}