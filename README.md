# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Workflow
    JobPostings (Landing Page) -> Choose job -> Click on 'Apply now'
        if logged in, job posting must be added to applied jobs (feature not added yet)
        else, take to signup page
                    |
                    v
    Select filters that apply -> Click on 'Apply filters' -> Filtered job results

## Important points to note:

1. Signup feature in the application is possible only when users.json is hosted as a json-server which is not feasible on CodeSandbox. The functioning of signup feature is shown in the demo video. However, login feature can still function.

2. To login, use credentials mentioned under each user in users.json file.

3. To logout from a particular account, click on the greeting on the right side of the header. A dropdown appears with the option to logout. Click on it.

### Please consider
** 
I developed the entire application within a single day since I noticed the email sent regarding the web development assignment just a day prior to my mid examinations. I would like to mention that I am capable of doing so much within a day, and I perform highly effectively.

The mentioned feature of role based access is only one step away from my current version of application and I would implement if I had just one evening. However due to time constraints, I could not include that feature.

I hope my submission will be considered and qualified.
Thank You
**