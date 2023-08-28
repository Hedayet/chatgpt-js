```markdown
# ChatGPT-JS

ChatGPT-JS is a simple JavaScript application that interacts with the OpenAI GPT-3.5 API for text generation. It allows you to have conversations with the AI model through a Node.js script.

## Getting Started

Follow these steps to set up and run the application:

### 1. Install Dependencies

Install the required dependencies using Yarn:

```sh
yarn install
```

### 2. Set Environment Variables

Before running the application, you need to set up your OpenAI organization ID and API key as environment variables. This ensures secure handling of your credentials.

```sh
export OPENAI_ORG_ID=your_org_id
export OPENAI_API_KEY=your_api_key
```
You can get your organization id from here: https://platform.openai.com/account/org-settings. And your API key from here - https://platform.openai.com/account/api-keys

Alternatively, though not recommended, you can hardcode your organization ID and API key directly into the code.

### 3. Run the Application

Run the Node.js script to start interacting with ChatGPT:

```sh
node index.js
```

## Usage

Upon running the application, you can engage in conversations with the AI model. Customize the interactions in the `index.js` file according to your needs.

## Notes

- Make sure you have Node.js installed on your machine before running the application.
   Always prioritize the secure handling of your API credentials.

## License

This project is licensed under the GNU General Public License - see the [LICENSE](LICENSE) file for details.
```
