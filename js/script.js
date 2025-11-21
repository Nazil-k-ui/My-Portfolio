function downloadFile() {
    const link = document.createElement('a');
    link.href = 'docs/resume.pdf';
    link.download ='resume-ZhigitekovaNazik'
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

