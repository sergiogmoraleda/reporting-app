import * as docx from 'docx';
import * as fs from 'fs';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import createReport from 'docx-templates';
import * as carbone from 'carbone';

export function generateReport(){
    
    const doc = new docx.Document({
        sections: [
            {
             children: [
                 new docx.Paragraph("--------------This is the report----------------"),

                 
             ]  
            }
            
        ]
    });
        Packer.toBlob(doc).then((blob) => {
        saveAs(blob, "example.docx");
    });
}

export function generateReportFromTemplate(){
    const template = fs.readFileSync('/template.docx');
    const buffer = createReport({
        template,
        data: {
            name:'Sergio',
            surname: 'Garcia'
        },
    });
    fs.writeFileSync('report.docx', buffer);
}

