## maskit_public
Public facing release of the maskit plugin and the model developed during CMPT415 Fall 2024

### Loading a Plugin in Firefox Using about:debugging
### Prerequisites
- Firefox
- Plugin Code

### Steps to Load the Plugin

1. **Open the about:debugging Page**
   - Open Firefox.
   - In the address bar, type `about:debugging` and press `Enter`.
   - Click on "This Firefox" in the left-hand menu to access debugging options for your local browser.

2. **Load Temporary Add-on**
   - On the `about:debugging` page, click the **Load Temporary Add-on...** button.
   - A file browser dialog will open. Navigate to the directory containing your plugin files.
   - Select any file within the plugin directory, such as the `manifest.json` file.

3. **Verify the Plugin is Loaded**
   - Once the plugin is loaded, it will appear in the list of Temporary Extensions on the `about:debugging` page.

Finetuned model is available at [https://huggingface.co/maskitplugin/maskitmodel](https://huggingface.co/maskitplugin/maskitmodel)

Currently the model is under testing and should be used cautiously. We have tested this on the Politifact dataset and achieved approximately 77% F1 score.
