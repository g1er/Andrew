 Adding code to local repository:
1) git init 
2) git add .
3) git commit -m "adding code to repository"

Check status in git interface
1) gitk

Branch off local repository
1) git checkout -b new_branch_name
Specifying -b causes a new branch
//https://git-scm.com/docs/git-checkout
Ex.: git checkout -b dev_andrew
Switch between branches
1) git checkout other_branch_name

 лонировать удаленный репо-ий, создать локальный(копи€)
1) git clone https://github.com/g1er/Andrew.git

«аписать код в удаленный репо-ий:
1) git push  <REMOTENAME> <BRANCHNAME> 
git push origin master 