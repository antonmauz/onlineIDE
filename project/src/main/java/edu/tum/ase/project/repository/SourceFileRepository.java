package edu.tum.ase.project.repository;

import edu.tum.ase.project.model.SourceFile;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Note that Spring provides a variety of Repository abstractions, JpaRepository
 * is
 * technology-specific
 * see
 * https://docs.spring.io/spring-data/jdbc/docs/current/reference/html/#repositories
 */
@Repository
public interface SourceFileRepository extends JpaRepository<SourceFile, String>  {
    SourceFile findByFileName(String name);
    List<SourceFile> findByProjectId(String projectId);
}