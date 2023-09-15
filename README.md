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

### Notes!
![image](https://github.com/abdulhalimzhr/MauKerja/assets/75671219/f5fe4a4f-3cd2-40a9-a4a8-98cbbc3cc7e3)

Currently, the API server at http://feapi.ajt.my/jobs consistently triggers CORS issues when accessed within the project. Consequently, I had to use the devServer with a proxy in order to meet the project's deadline. If you encounter any CORS-related problems, kindly utilize the following command to launch the application:

        make build env=dev

And for now, this project can only be accessed locally because of the CORS issue. Thank you for your consideration :D
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
   ![image](https://github.com/abdulhalimzhr/MauKerja/assets/75671219/85db2c99-11e8-4a4a-923c-ed046313c86c)

3. Home Page (Light Mode)
   ![image](https://github.com/abdulhalimzhr/MauKerja/assets/75671219/052f2652-d3e3-4897-9f8a-017ca77a9773)

4. Home Page (Mobile Dark Mode)
   ![Screen Shot 2023-09-16 at 03 15 59-fullpage](https://github.com/abdulhalimzhr/MauKerja/assets/75671219/dab80373-8763-4586-9202-61fa25aa009c)
   
6. Home Page (Mobile Light Mode)
   ![Screen Shot 2023-09-16 at 03 16 21](https://github.com/abdulhalimzhr/MauKerja/assets/75671219/82117408-d446-40f5-ab40-ee03cf1dcfe1)

8. Job Details Page (Dark Mode)
   ![image](https://github.com/abdulhalimzhr/MauKerja/assets/75671219/35d0baa0-2e82-45af-9933-25a79f7ecba4)

9. Job Details Page (Light Mode)
   ![image](https://github.com/abdulhalimzhr/MauKerja/assets/75671219/e767de29-85a4-43a9-b3a5-bd5304de4f7f)

10. Job Details Page (Mobile Dark Mode)
    ![Screen Shot 2023-09-16 at 03 17 07](https://github.com/abdulhalimzhr/MauKerja/assets/75671219/4e869d1c-afde-4873-b058-45b2e99857c9)

12. Job Details Page (Mobile Light Mode)
    ![Screen Shot 2023-09-16 at 03 16 39](https://github.com/abdulhalimzhr/MauKerja/assets/75671219/1b508ff0-469f-4bd8-a624-320081481d14)

14. Job Search Page (Dark Mode)
   ![image](https://github.com/abdulhalimzhr/MauKerja/assets/75671219/44863a86-0e95-4d51-acca-fbe035b1c1aa)

15. Job Search Page (Light Mode)
   ![image](https://github.com/abdulhalimzhr/MauKerja/assets/75671219/f5e0be72-bec1-4cbe-9777-0afe482ea200)

16. Locale (EN)
   ![image](https://github.com/abdulhalimzhr/MauKerja/assets/75671219/5cff7d9d-b8de-4116-b397-d3ade128139c)

17. Locale (MY)
   ![image](https://github.com/abdulhalimzhr/MauKerja/assets/75671219/9d61549a-4f93-4b69-8b42-8490876f0e2e)
