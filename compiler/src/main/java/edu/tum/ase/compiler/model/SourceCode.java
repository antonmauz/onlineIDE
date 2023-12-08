package edu.tum.ase.compiler.model;

public class SourceCode {
    private String code;
    private String fileName;
    private String stdout;
    private String stderr;
    private boolean compilable = false;

    public SourceCode() {
    }
    // getters/setters here...
    public String getCode() {
        return code;
    }
    public String getFileName() {
        return fileName;
    }
    public String getStdout() {
        return stdout;
    }
    public String getStderr() {
        return stderr;
    }
    public boolean isCompilable() {
        return compilable;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public void setStdout(String stdout) {
        this.stdout = stdout;
    }

    public void setStderr(String stderr) {
        this.stderr = stderr;
    }

    public void setCompilable(boolean compilable) {
        this.compilable = compilable;
    }
}