package edu.tum.ase.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import edu.tum.ase.project.model.Project;
import edu.tum.ase.project.service.ProjectService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/projects")
public class ProjectController {
    @Autowired
    private ProjectService projectService;

    @PostMapping
    public Project createProject(@RequestBody Project Project) {
        System.out.println("Creating project");
        return projectService.createProject(Project);
    }

    @GetMapping
    public Iterable<Project> getProjects() {
        return projectService.getProjects();
    }

    @GetMapping(path = "/{id}")
    public Project getProject(@RequestBody String id) {
        return projectService.findById(id);
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.PUT)
    public Project updateProject(@PathVariable String id, @RequestBody Project Project) {
        if (!id.equals(Project.getId())) {
            return null;
        }
        return projectService.updateProject(Project);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteProject(@PathVariable String id) {
        projectService.deleteProjectById(id);
    }
}