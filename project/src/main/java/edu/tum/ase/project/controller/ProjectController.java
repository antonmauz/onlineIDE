package edu.tum.ase.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import edu.tum.ase.project.model.Project;
import edu.tum.ase.project.model.ShareProjectDTO;
import edu.tum.ase.project.service.ProjectService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/projects")
public class ProjectController {
    @Autowired
    private ProjectService projectService;

    @PostMapping
    public Project createProject(@RequestBody Project project) {
        System.out.println("Creating project");

        return projectService.createProject(project);
    }

    @GetMapping
    public Iterable<Project> getProjects() {
        return projectService.getProjects();
    }

    @GetMapping(path = "/{id}")
    public Project getProject(@PathVariable String id) {
        return projectService.findById(id);
    }

    @PutMapping(path = "/{id}")
    public Project updateProject(@PathVariable String id, @RequestBody Project project) {
        if (!id.equals(project.getId())) {
            return null;
        }
        return projectService.updateProject(project);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteProject(@PathVariable String id) {
        projectService.deleteProjectById(id);
    }

    @PutMapping("/{id}/share")
    public Project shareProject(@PathVariable String id, @RequestBody ShareProjectDTO shareProject) {

        Project project = projectService.findById(id);

        // TODO: process PUT request, handle shareProject.getUsername()

        return projectService.updateProject(project);
    }
}
