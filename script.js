function downloadCV() {
    const link = document.createElement('a');
    link.href = 'pdfs/EUGENE_VAN_DER_MERWE_CV.pdf'; // Path to your CV file
    link.download = 'EUGENE_VAN_DER_MERWE_CV.pdf'; // Filename to be downloaded
    link.click();
}
