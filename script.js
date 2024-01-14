function generateTicket() {
  const name = document.getElementById('name').value;
  const branch = document.getElementById('branch').value;
  const regNumber = document.getElementById('regNumber').value;
  const college = document.getElementById('college').value;


  const ticketContent = `
    <div class="border border-gray-300 p-4 mb-4 bg-white p-4 rounded shadow-md">
      <div class='flex items-center justify-between my-4'>
        <img src='./images/gdsc.webp' class='w-1/12'>
        <h2 class='text-2xl font-semibold'>Google Developer Student Clubs | GITAM </h2>
      </div>

      <div class='flex justify-between items-center'>
        <div>
          <h3 class="text-xl font-bold mb-2">Ticket Information</h3>
          <p class="mb-2"><strong>Name:</strong> ${name}</p>
          <p class="mb-2"><strong>Branch:</strong> ${branch}</p>
          <p class="mb-2"><strong>Registration Number:</strong> ${regNumber}</p>
          <p class="mb-2"><strong>College:</strong> ${college}</p>
        </div>
        <div id="qrcode"></div>
      </div>
      
    </div>
  `;

  document.getElementById('ticketContainer').innerHTML = ticketContent;

  const qrcode = new QRCode(document.getElementById('qrcode'), {
    text: `Name: ${name}\nBranch: ${branch}\nRegistration Number: ${regNumber}\nCollege: ${college}`,
    width: 128,
    height: 128
  });
}