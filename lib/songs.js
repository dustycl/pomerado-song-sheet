import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const songsDirectory = path.join(process.cwd(), 'songs');

export function getSortedSongsData() {
    const fileNames = fs.readdirSync(songsDirectory);
    const allSongsData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(songsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data
        }
    })

    return allSongsData.sort(({ title: a }, { title: b }) => {
        if (a < b) {
            return 1;
        }
        else if (a > b) {
            return -1;
        }
        else {
            return 0;
        }
    })
}