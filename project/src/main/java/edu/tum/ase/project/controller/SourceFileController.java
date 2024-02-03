package edu.tum.ase.project.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;

import edu.tum.ase.project.model.Project;
import edu.tum.ase.project.model.SourceFile;
import edu.tum.ase.project.model.SourceFileDTO;
import edu.tum.ase.project.repository.ProjectRepository;
import edu.tum.ase.project.service.SourceFileService;

@RestController
@RequestMapping("/sourcefiles")
public class SourceFileController {
    @Autowired
    private SourceFileService sourceFileService;

    @Autowired
    private ProjectRepository projectRepository;

    @PostMapping
    public SourceFile createSourceFile(@RequestBody SourceFileDTO sourceFileDTO) {
        System.out.println("Creating source file");

        // Retrieve the projectId from the SourceFileDTO object
        String projectId = sourceFileDTO.getProject();

        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new RuntimeException("Project not found"));

        // Create a new SourceFile object and set the fields from the SourceFileDTO
        SourceFile sourceFile = new SourceFile(sourceFileDTO.getFileName(), sourceFileDTO.getSourceCode(), project);

        return sourceFileService.createSourceFile(sourceFile);
    }

    @GetMapping
    public Iterable<SourceFile> getSourceFiles() {
        return sourceFileService.getSourceFiles();
    }

    @GetMapping(path = "/{id}")
    public SourceFile getSourceFile(@PathVariable String id) {
        return sourceFileService.findById(id);
    }

    @PutMapping(path = "/{id}")
    public SourceFile updateSourceFile(@PathVariable String id, @RequestBody SourceFile sourceFile) {
        if (!id.equals(sourceFile.getId())) {
            return null;
        }
        return sourceFileService.updateSourceFile(sourceFile);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteSourceFile(@PathVariable String id) {
        sourceFileService.deleteSourceFileById(id);
    }

}
