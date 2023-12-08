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

import edu.tum.ase.project.model.SourceFile;
import edu.tum.ase.project.service.SourceFileService;


@RestController
@RequestMapping("/sourcefiles")
public class SourceFileController {
    @Autowired
    private SourceFileService sourceFileService;

    @PostMapping
    public SourceFile createSourceFile(@RequestBody SourceFile sourceFile) {
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
