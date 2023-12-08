package edu.tum.ase.project.model;

import org.hibernate.annotations.GenericGenerator;
import jakarta.persistence.*;

@Entity
@Table(name = "source_files")
public class SourceFile {
    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    @Column(name = "source_file_id")
    private String id;
    @Column(name = "file_name", nullable = false, unique = true)
    private String fileName;
    @Column(name = "source_code", nullable = false)
    private String sourceCode;
    @ManyToOne
    @JoinColumn(name = "project", nullable = false)
    private Project project;


    protected SourceFile() {
        // no-args constructor required by JPA spec
        // this one is protected since it shouldn't be used directly
    }

    public SourceFile(String fileName, String sourceCode, Project project) {
        this.fileName = fileName;
        this.sourceCode = sourceCode;
        this.project = project;
    }
    // getters and setters
    public String getId() {
        return id;
    }
    public String getFileName() {
        return fileName;
    }
    public String getSourceCode() {
        return sourceCode;
    }
    public Project getProject() {
        return project;
    }

    public void setId(String id) { this.id = id; }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public void setSourceCode(String sourceCode) {
        this.sourceCode = sourceCode;
    }

    public void setProject(Project project) {
        this.project = project;
    }
}