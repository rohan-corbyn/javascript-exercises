const { mkdir } = require("fs/promises");
const { join } = require("path");
const { camelCase, pascalCase } = require("case-anything");
const { createChapterDirectoryName, createExerciseDirectoryName } = require("./generators/helpers");
const { writeReadme } = require("./generators/writeReadme");
const { writeExercise } = require("./generators/writeExercise");
const { writeExerciseSpec } = require("./generators/writeExerciseSpec");

module.exports = function (plop) {
  plop.setActionType("createExercise", async function (answers) {

    // ------------------------ //
    let { chapterName, exerciseName } = answers;

    if (!chapterName) {
      throw new Error(
        `Invalid exerciseChapterName. Expected: valid string. Actual: "${chapterName}"`
      );
    }

    if (!exerciseName) {
      throw new Error(
        `Invalid exerciseName. Expected: valid string. Actual: "${exerciseName}"`
      );
    }
    //format
    // ---------------- //

    const formattedChapterName = await createChapterDirectoryName(
      pascalCase(chapterName));

    const formattedExerciseName = await createExerciseDirectoryName(
      camelCase(exerciseName), formattedChapterName);

    const basePath = join(`./${formattedChapterName}/`, formattedExerciseName);
    const solutionPath = join(basePath, "solution");

    //write
    // ---------------- //

    await mkdir(basePath);
    await mkdir(solutionPath);
    await writeReadme(basePath);
    await writeExercise(basePath);
    await writeExercise(solutionPath);
    await writeExerciseSpec(basePath);
    await writeExerciseSpec(solutionPath);

    // ------------------------ //
  });

  plop.setGenerator("Basic", {
    description: "Create a basic JavaScript Exercise.",
    prompts: [
      {
        type: "input",
        name: "chapterName",
        message: "What is the name of the Chapter? (PascalCase)",
      },
      {
        type: "input",
        name: "exerciseName",
        message: "What is the name of the Exercise? (camelCase)",
      },
    ],
    actions: [{ type: "createExercise" }],
  });
};
