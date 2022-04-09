/**
 * Single Responsibility Principle
 * => A class should have only one reason to change.
 * => Rather than making a "God" class by lumping all the logic into one class, break the logic into separate classes that are responsible for only one thing.
 */
/**
 * In the following example, Journal class is responsible for managing the journal entries.
 * And, we break the file I/O logic into a separate class, FileStore.
 */
class Journal {
  #name = "";
  #entries = [];

  constructor(name) {
    this.#name = name;
    this.#entries = [];
  }

  get name() {
    return this.#name;
  }

  get entries() {
    return this.#entries;
  }

  addEntry(text) {
    this.#entries.push(text);
  }

  removeEntry(index) {
    this.#entries.splice(index, 1);
  }

  printEntries() {
    let counter = 1;
    for (const entry of this.#entries) {
      console.log(`${counter++}: ${entry}`);
    }
  }
}

// FileStore class is responsible for managing the file I/O.
class FileStore {
  #pathToSaveFile = "";
  #fs = null;

  #deleteAllFiles = (folderPath) => {
    const files = this.#fs.readdirSync(folderPath);
    for (const file of files) {
      this.#fs.unlinkSync(folderPath + "/" + file);
    }
  };

  constructor(fileDir, fileName) {
    this.#pathToSaveFile = `${fileDir}/${fileName}`;

    // sorta lazy loading of fs module
    this.#fs = require("fs");

    // deleteAllFiles before start
    this.#deleteAllFiles(fileDir);
  }

  storeToDisk(journalName, entries) {
    const data = JSON.stringify({
      journalName,
      entries,
    });
    this.#fs.writeFileSync(this.#pathToSaveFile, data);
  }

  loadFromDisk() {
    const data = this.#fs.readFileSync(this.#pathToSaveFile);
    return JSON.parse(data);
  }
}

module.exports = {
  Journal,
  FileStore,
};
