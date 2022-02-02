import fs, { readFileSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const servicesDirectory = path.join(process.cwd(), 'services');

export function getSortedServicesData() {
    const fileNames = fs.readdirSync(servicesDirectory);

    const servicesData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '');
        
        const fullPath = path.join(servicesDirectory, fileName);
        const fileContents = readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);
        const data = matterResult.data;
        // data.date = data.date.toString();

        return {
            id,
            ...data
        }
    })

    return servicesData;

}

export function getCurrentService() {
    
}