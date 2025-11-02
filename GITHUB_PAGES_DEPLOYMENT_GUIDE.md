# Deploying Your Resume Website to GitHub Pages
## A Complete Guide for Daniel Simon Jr.

## Understanding GitHub Pages

Before we dive into the deployment process, let's understand what GitHub Pages is and why it's an excellent choice for hosting your resume website. GitHub Pages is essentially a free web hosting service that's built directly into GitHub. Think of it as a special folder in your GitHub repository that GitHub automatically converts into a live website accessible to anyone on the internet.

The beauty of this approach is that it combines version control with web hosting. Every time you update your resume or make changes to your website, those changes are tracked in Git's history. You can see exactly what changed, when it changed, and why you changed it. If you ever want to revert something, you have a complete history to fall back on. It's like having unlimited "undo" capabilities for your website.

Another powerful aspect is that GitHub Pages gives you a professional URL. If your GitHub username is, for example, "danielsimonjr", your website could be hosted at https://danielsimonjr.github.io/resume or even just https://danielsimonjr.github.io if you name the repository correctly. For someone in the defense industry like yourself, having a clean, professional web presence that you fully control is valuable.

## Before You Begin

You'll need a GitHub account. If you don't have one yet, go to https://github.com and sign up. Choose a professional username since it will be part of your website URL. Something like your name or a variation of it works well.

You should also have Git installed on your computer. Git is the underlying version control system that GitHub uses. If you're on Windows, you can download it from https://git-scm.com. If you're on macOS, you likely already have it installed, but you can verify by opening Terminal and typing "git --version". Linux users typically have it pre-installed.

## Creating Your Repository

The first step is creating a repository on GitHub to hold your website files. A repository, or "repo" for short, is essentially a project folder that Git tracks. Think of it as a special folder where every change is automatically documented.

Log into GitHub and click the green "New" button or the plus icon in the upper right corner to create a new repository. You'll need to give your repository a name. For a resume website, something clear and professional like "resume" or "professional-portfolio" works well. If you name it exactly as "yourusername.github.io" (replacing "yourusername" with your actual GitHub username), this becomes your primary GitHub Pages site and will be accessible at that exact URL. Otherwise, if you name it something like "resume", it will be accessible at "yourusername.github.io/resume".

When creating the repository, you have a choice to make it public or private. For a resume website, public makes sense because you want potential employers to see it. However, GitHub Pages works with private repositories too if you have a paid GitHub account and prefer to control who sees your source code (though the website itself will still be publicly accessible once you enable GitHub Pages).

Initialize the repository with a README file. This is optional, but it's good practice. The README is like the cover page of your repository, explaining what the project is about. You can always edit it later to add a description of your website.

## Uploading Your Website Files

Now you need to get your website files from your computer into this GitHub repository. There are two main approaches: using Git command line or using GitHub's web interface. Let me explain both, and you can choose which feels more comfortable.

### Using Git Command Line (Recommended for Long-Term Use)

The command line approach might seem intimidating at first, but it gives you the most control and becomes second nature quickly. Open your terminal or command prompt and navigate to the directory where you want to work. You can use "cd" (change directory) to navigate. For example, if you want to work in your Documents folder, you might type "cd ~/Documents" on Mac/Linux or "cd %USERPROFILE%\Documents" on Windows.

First, you need to clone the repository you just created on GitHub to your local computer. Cloning means creating a local copy that's connected to the online version. On your repository page on GitHub, click the green "Code" button and copy the URL that appears. It will look something like "https://github.com/yourusername/resume.git". Back in your terminal, type "git clone" followed by that URL. So the complete command would be "git clone https://github.com/yourusername/resume.git". Press Enter, and Git will download the repository to your computer, creating a folder with the repository name.

Navigate into that newly created folder by typing "cd resume" (or whatever you named your repository). Now copy your website files into this folder. You have three files that need to go here: index.html, styles.css, and script.js. You can use your file explorer to copy these files into the repository folder, or use terminal commands if you're comfortable with that.

Also, you should copy your enhanced resume document (Resume_Daniel_Simon_Jr_Enhanced.docx) into this folder so that the download link in your website works. Make sure the filename in the HTML matches exactly, including capitalization and underscores.

Once the files are in place, you need to tell Git about them. Type "git add ." (that's git, space, add, space, period). The period means "add everything in this folder". This stages the files, meaning you're preparing them to be committed. Think of staging as putting items in a shopping cart before checkout.

Next, commit these changes. Committing is like taking a snapshot of your project at this moment. Type "git commit -m 'Initial commit: Add resume website files'" and press Enter. The text in quotes is your commit message, explaining what this commit does. Good commit messages are helpful when you're looking back through your history later.

Finally, push these changes to GitHub. Type "git push origin main" (or "git push origin master" if your repository uses the older naming convention). This uploads your local changes to GitHub's servers. You might be prompted to log in to GitHub at this point.

### Using GitHub's Web Interface (Simpler for Beginners)

If the command line feels too complex right now, GitHub's web interface offers a gentler introduction. Navigate to your repository on GitHub's website. You should see an "Add file" button with a dropdown menu. Click it and select "Upload files".

Drag and drop your three website files (index.html, styles.css, and script.js) plus your resume document into the upload area, or click "choose your files" to browse for them. Make sure all four files are selected.

At the bottom of the page, you'll see a section to commit your changes. In the first text box, write a brief message like "Add resume website files". This is your commit message, and it should describe what you're adding or changing. The extended description field is optional but can be useful for explaining your reasoning in more detail.

Choose "Commit directly to the main branch" (or master branch, depending on your repository settings), then click "Commit changes". GitHub will upload your files and add them to your repository.

## Enabling GitHub Pages

Now comes the exciting part where your repository becomes a live website. On your repository page, click the "Settings" tab near the top of the page. This takes you to the repository settings, which control all sorts of configuration options.

In the left sidebar, scroll down until you find "Pages" under the "Code and automation" section. Click on it. This is GitHub Pages' control panel for your repository.

Under "Source", you'll see a dropdown that probably says "None". Click it and select "main" (or "master" if that's your branch name). This tells GitHub Pages which branch of your repository to use for the website. A branch in Git is like a parallel version of your project, but for now, you only have one branch called main or master, which is the primary version.

There's another dropdown next to it for selecting a folder. Leave this on "/ (root)" unless you've organized your files into a specific folder. The root option means GitHub Pages will look for your index.html file at the top level of your repository.

Click "Save". GitHub will process your request, and after a few moments, you'll see a message near the top of the Pages settings that says something like "Your site is published at https://yourusername.github.io/resume/". This is your website's URL! It might take a minute or two for the site to actually go live, as GitHub needs to build and deploy it.

## Customizing Your Website

Now that the foundation is in place, you'll want to personalize the website with your actual contact information. Open the index.html file in a text editor (like VS Code, Sublime Text, Notepad++, or even plain Notepad). Look for the section near the bottom labeled "Contact Section". You'll see placeholder links for email, LinkedIn, and GitHub.

Replace "your.email@example.com" with your actual email address. Update the LinkedIn link with your LinkedIn profile URL. You can find this by going to your LinkedIn profile and copying the URL from your browser's address bar. Similarly, update the GitHub link to point to your GitHub profile.

If you don't want to display all three contact methods, you can simply delete the ones you don't want. Each contact link is wrapped in an "a" tag that looks like this: `<a href="..." class="contact-link">...</a>`. Delete the entire block for any contact method you don't need.

After making these changes, you need to update your repository. If you're using the command line, navigate back to your repository folder and run these commands: "git add ." to stage the changes, "git commit -m 'Update contact information'" to commit them with a descriptive message, and "git push origin main" to push them to GitHub. If you're using the web interface, go to the file on GitHub, click the pencil icon to edit it, make your changes, add a commit message at the bottom, and click "Commit changes".

GitHub Pages automatically rebuilds your site whenever you push changes, so your updates should appear on the live site within a minute or two.

## Adding Your Resume Document

You'll notice the website has a "Download Resume" button in the hero section. For this to work, your enhanced Word document needs to be in the same repository. If you haven't already, upload Resume_Daniel_Simon_Jr_Enhanced.docx to your repository using either method described earlier.

The HTML links to this file using a relative path, which means it expects the file to be in the same directory as index.html. Make sure the filename in your repository exactly matches what's written in the HTML. Computers are very particular about capitalization and spacing in filenames.

## Understanding Updates and Maintenance

One of the most powerful aspects of this setup is how easy it is to maintain. Whenever you want to update your resume, you simply edit the relevant file, commit the change, and push it to GitHub. The live website updates automatically.

For example, if you start a new job, you would edit index.html, find the Experience section, add a new timeline item with your new position details, save the file, and push the changes. Within minutes, anyone visiting your website sees the updated information.

This is fundamentally different from traditional website hosting where you might need to log into a control panel, navigate through a file manager, and manually replace files. With GitHub Pages, your version control and deployment are unified into one smooth workflow.

## Troubleshooting Common Issues

If your website doesn't appear after enabling GitHub Pages, first check that you waited a few minutes. The initial deployment can take up to five minutes. If it's been longer, verify that your index.html file is actually named "index.html" exactly, including lowercase letters and the .html extension. GitHub Pages specifically looks for this filename as the entry point to your website.

If the website loads but looks unstyled (just plain text with no colors or layout), this usually means the CSS file isn't loading correctly. Check that styles.css is in the same folder as index.html and that the filename matches exactly. Also verify that the link tag in your HTML's head section has the correct filename: `<link rel="stylesheet" href="styles.css">`.

If the JavaScript features aren't working (like the smooth scrolling or fade-in animations), similarly check that script.js is in the right place and that the script tag at the bottom of your HTML points to it correctly: `<script src="script.js"></script>`.

If links on your website don't work correctly, it's often due to absolute versus relative paths. The links in your HTML are set up as relative paths (like "styles.css" instead of "/resume/styles.css"), which should work correctly. If you named your repository something other than what I assumed, you might need to adjust paths.

## Taking It Further

Once your basic site is running, you might want to enhance it further. You could add a custom domain name instead of using the github.io URL. GitHub Pages supports this through the settings panel. You would buy a domain name from a registrar like Namecheap or Google Domains, then point it to your GitHub Pages site using DNS settings.

You could also add analytics to see who's visiting your site. Google Analytics is free and gives you insights into how many people view your resume, which pages they spend the most time on, and how they found your site.

If you want to make the site even more interactive, you could add a projects section showcasing your work, or integrate a contact form using services like Formspree that handle form submissions without requiring a backend server.

## The Philosophy Behind This Approach

This setup embodies several principles that align with your systems thinking approach. First, it's a complete solution that considers the entire lifecycle from creation to maintenance. You're not just putting content online; you're establishing a system that can evolve as your career progresses.

Second, it uses version control, which means every change is documented and reversible. This is analogous to how you approach Test Program Sets with thorough documentation and change management. Just as you wouldn't deploy an avionics test system without comprehensive records, you shouldn't deploy your professional presence without version control.

Third, it's built on open standards (HTML, CSS, JavaScript) that you fully control. You're not locked into a proprietary platform. If GitHub Pages ever doesn't meet your needs, you can take these exact same files and host them anywhere that serves static websites. This portability is similar to how you design TPS systems with modularity and future adaptability in mind.

## Conclusion

You now have a professional website that showcases your unique value proposition as a systems engineer who integrates philosophy, science, and technology. The site is live, maintainable, and under your complete control. As your career evolves and you take on new challenges, keeping this website current becomes a simple matter of editing a few files and pushing changes.

Remember, this website is more than just a digital resume. It's a demonstration of your technical capabilities, your attention to detail, and your understanding of how to build sustainable systems. The fact that you have your own professionally designed website, maintained through version control, speaks to your technical sophistication.

If you have any questions as you work through this process, don't hesitate to ask. The initial setup might feel unfamiliar, but once you've done it once, updating your site becomes second nature.

---

Quick Reference Commands:

For updating your site after the initial setup:
1. Make changes to your files locally
2. Open terminal and navigate to your repository folder
3. Run: git add .
4. Run: git commit -m "Description of what you changed"
5. Run: git push origin main
6. Wait 1-2 minutes for GitHub Pages to rebuild
7. Refresh your website to see changes

Your website URL will be: https://yourusername.github.io/repositoryname/
(Replace "yourusername" with your GitHub username and "repositoryname" with what you named the repository)
