import fs from "fs";
import path from "path";
import prettier from "prettier";
import axios from "axios";
import dotenv from "dotenv";

const InlineHomeData = require("../../client/src/_data/InlineHome.json");
if (process.env.DEVELOPMENT) {
  console.log("dotenv");
  dotenv.config({ path: path.resolve(__dirname, "keys.env") });
}

console.log(process.env.GH_TOKEN);
async function codeWriter() {
  for (let project of InlineHomeData.project) {
    try {
      const languages = await axios.get(
        `https://api.github.com/repos/ticklepoke/${project.slug}/languages`,
        {
          headers: {
            Authorization: `token ${process.env.GH_TOKEN}`,
          },
        }
      );
      const stars = await axios.get(
        `https://api.github.com/repos/ticklepoke/${project.slug}/stargazers`,
        {
          headers: {
            Authorization: `token ${process.env.GH_TOKEN}`,
          },
        }
      );

      let formatted_language = Object.keys(languages.data).map((lang) => {
        return {
          title: lang,
          logo: `${lang.replace(" ", "").toLowerCase()}.png`,
        };
      });

      project.stars = stars.data.length;
      project.languages = formatted_language;
      console.log("formatted");
    } catch (err) {
      console.error(err);
    }
  }

  const new_file = path.resolve(
    __dirname,
    "../../client/src/_data/InlineHome.json"
  );
  fs.writeFileSync(
    new_file,
    prettier.format(JSON.stringify(InlineHomeData), {
      parser: "json",
      semi: false,
    })
  );
}
codeWriter();
