## MauKerja.my

A coding test for MauKerja.my.

## Description

This project is a Web portals to jobseekers and employers to connect. This project is built using Vue.js 3 with Tailwind CSS.

Tested on Windows 11 with Hyper-V Docker (Because WSL is too slow).

## Pre-requisites

- [NPM](https://nodejs.org/en/download)
- [Docker](https://docs.docker.com/get-docker/)
- [Make](https://www.gnu.org/software/make/manual/make.html)

## How to Run the Application

1. Make sure you have installed all of the tools mentioned in the pre-requisites section above on your local device
2. Open the terminal within this project's directory
3. Run the following command to install all project dependencies, this will take 5-10 minutes to finish.
   For development env, use the following command:

   ```
    make build env=dev
   ```

   For production env, use the following command:

   ```
    make build env=prod
   ```

4. After the setup is completed, you can access the application through http://localhost:8080

### Notes

Currently, the API server at http://feapi.ajt.my/jobs consistently triggers CORS issues when accessed within the project. Consequently, I had to use the devServer with a proxy in order to meet the project's deadline. If you encounter any CORS-related problems, kindly utilize the following command to launch the application:

        make build env=dev

## Additional Information

### Date of Submission

16 September 2023

---

### Time Spent

Detailed Dashboard: [link](https://wakatime.com/@abdulhalimzhr/projects/jynqrkjgxz?start=2023-09-10&end=2023-09-16)

[![wakatime](https://wakatime.com/badge/user/52dc8466-d511-4812-bfed-fa756030a686/project/90d48f51-99a7-4abf-80b6-89809cc73877.svg)](https://wakatime.com/badge/user/52dc8466-d511-4812-bfed-fa756030a686/project/90d48f51-99a7-4abf-80b6-89809cc73877)

---

### Preview

1. Home Page (Dark Mode)

2. Home Page (Light Mode)

3. Home Page (Mobile Dark Mode)

4. Home Page (Mobile Light Mode)

5. Job Details Page (Dark Mode)

6. Job Details Page (Light Mode)

7. Job Details Page (Mobile Dark Mode)

8. Job Details Page (Mobile Light Mode)

9. Job Search Page (Dark Mode)

10. Job Search Page (Light Mode)

11. Job Search Page (Mobile Dark Mode)

12. Job Search Page (Mobile Light Mode)

13. Locale (EN)

14. Locale (MY)
