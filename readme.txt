 Adding code to local repository:
1) git init 
2) git add .
3) git commit -m "adding code to repository"

1) Check status in git interface
gitk

2) Clone remove branch
git clone https://github.com/g1er/Andrew.git

3) check all branches and your current branch
git branch -a

4) create your new local repository
git checkout -b new_branch_name

5) Switch between local branches
git checkout other_branch_name

6) check for tracked and untracked local changes ('red' changes - untracked, green changes - tracked)
git status

7) track local changes
git add .

8) commit local changes
git commit -m "comment for my changes"

9) push local changes to remove same branch (event you did not have the new branch before it will create automatically)
git push origin branch_name 
