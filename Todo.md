### Todos

- add npm scripts for convenience
- play around with git flow and Vincent Driessen's branching model:
https://nvie.com/posts/a-successful-git-branching-model/
- play with release flow and versioning


npm run reinit-gitflow

"reinit-gitflow": 
"git config --remove-section 'gitflow.path' &&
 git config --remove-section 'gitflow.prefix' &&
  git config --remove-section 'gitflow.branch' &&
   npm run init-gitflow",
   
   
   "init-gitflow": "git config --local include.path ../.gitconfig"

