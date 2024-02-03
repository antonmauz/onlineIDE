package edu.tum.ase.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.tum.ase.project.model.SourceFile;
import edu.tum.ase.project.repository.SourceFileRepository;

@Service
public class SourceFileService {
    @Autowired
    private SourceFileRepository sourceFileRepository;

    public SourceFile createSourceFile(SourceFile sourceFile) {

        return sourceFileRepository.save(sourceFile);
    }

    public SourceFile findByFileName(String name) {
        return sourceFileRepository.findByFileName(name);
    }

    public SourceFile findById(String id) {
        return sourceFileRepository.findById(id).get();
    }

    public List<SourceFile> getSourceFiles() {
        return sourceFileRepository.findAll();
    }

    public SourceFile updateSourceFile(SourceFile sourceFile) {
        if (sourceFile.getId() == null) {
            return null;
        }

        SourceFile existingSourceFile = sourceFileRepository.findById(sourceFile.getId()).get();
        if (existingSourceFile == null) {
            return null;
        }
        return sourceFileRepository.save(sourceFile);
    }

    public void deleteSourceFile(SourceFile sourceFile) {
        sourceFileRepository.delete(sourceFile);
    }

    public void deleteAllSourceFiles() {
        sourceFileRepository.deleteAll();
    }

    public void deleteSourceFileById(String id) {
        sourceFileRepository.deleteById(id);
    }

    public List<SourceFile> findSourceFilesByProjectId(String projectId) {
        return sourceFileRepository.findByProjectId(projectId);
    }

}
