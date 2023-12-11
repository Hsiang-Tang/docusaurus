# WSL

```txt title="WSL (Windows Subsystem for Linux)"
Overview/
├── Introduction
├── Installation
└── Usage
```


## 1. Introduction
 **What is WSL:** 
  - Windows Subsystem for Linux (WSL) allows running a Linux environment on Windows 10.

## 2. CLI Installation

  - Steps to Install:

 **1. Enable WSL feature**
 ```
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

 **2. Install Ubuntu from Microsoft Store**
 ```
wsl --install -d Ubuntu
```


## 3. Usage

  - Basic commands for using Ubuntu in WSL

**1. Accessing Windows files**
```
explorer.exe .
```

**2. Shutting down WSL**
```
wsl --shutdown
```

**3. Unregistering Ubuntu distribution**
```
wsl --unregister Ubuntu
```

