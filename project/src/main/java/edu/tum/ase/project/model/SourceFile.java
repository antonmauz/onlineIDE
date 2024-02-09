package edu.tum.ase.project.model;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonBackReference;

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

    @Column(name = "code", nullable = false)
    private String code;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "project", nullable = false)
    private Project project;

    protected SourceFile() {
        // no-args constructor required by JPA spec
        // this one is protected since it shouldn't be used directly
    }

    public SourceFile(String fileName, String code, Project project) {
        this.fileName = fileName;
        this.code = code;
        this.project = project;
    }

    // getters and setters
    public String getId() {
        return id;
    }

    public String getFileName() {
        return fileName;
    }

    public String getCode() {
        return code;
    }

    public Project getProject() {
        return project;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void setProject(Project project) {
        this.project = project;
    }
}