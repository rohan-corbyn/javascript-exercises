const { readdir, mkdir } = require("fs/promises");

function prependZero(number) {
  console.log(number)
  if (number < 9)
    return "0" + number;
  else
    return number;
}

async function getLatestDirectoryNumber(chapterName) {
  try {
    const path = chapterName ? "./" + chapterName + "/" : "./";
    const files = await readdir(path);
    let latestDirectory = files.findLast((file) => /^\d+_\w+$/.test(file));
    const latestDirectoryNumber = !latestDirectory ? 0 : parseInt(latestDirectory.match(/^\d+/));
    console.log(latestDirectoryNumber)
    return latestDirectoryNumber;
  } catch (err) {
    console.error(err);
  }
}

async function getExistingDirectory(directory, chapterName) {
  try {
    const path = chapterName ? "./" + chapterName + "/" : "./";
    const files = await readdir(path);

    return files.findLast((file) => new RegExp(`^\\d+_${directory}$`).test(file));
  } catch (err) {
    console.error(err);
  }
}

async function createExerciseDirectoryName(directoryName, chapterName) {

  const existingExerciseDirectory = await getExistingDirectory(directoryName, chapterName)
  if (existingExerciseDirectory) {
    throw new Error(`Exercise already exists in ./${"${existingExerciseDirectory}"}/ with name "${existingExerciseDirectory}"`);
  }
  else {
    const latestExerciseNumber = await getLatestDirectoryNumber(chapterName);
    let returnval = `${prependZero(latestExerciseNumber + 1)}_${directoryName}`;
    return returnval;
  }
}

async function createChapterDirectoryName(directoryName) {
  const existingChapterDirectory = await getExistingDirectory(directoryName)

  if (existingChapterDirectory) {
    return existingChapterDirectory;
  } else {
    const latestChapterNumber = await getLatestDirectoryNumber();
    const path = `./${prependZero(latestChapterNumber + 1)}_${directoryName}`;
    await mkdir(path);
    return path;
  }
}

function splitDirectoryName(directoryName) {
  return {
    exerciseNumber: directoryName.match(/\d+/),
    exerciseName: directoryName.match(/[a-z]+/ig)[1],
  };
}

module.exports = { createChapterDirectoryName, createExerciseDirectoryName, splitDirectoryName };
