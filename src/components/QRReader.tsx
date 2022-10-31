import { Html5Qrcode } from "html5-qrcode";
import { Html5QrcodeResult } from "html5-qrcode/esm/core";
import { Component, onMount } from "solid-js";
import "../index.css";

const QRReader: Component = () => {
  let copyField: HTMLInputElement;

  let copyBtn: HTMLButtonElement;
  onMount(() => {
    let modal = document.getElementById("my-modal")!;

    modal.style.display = "none";

    // We want the modal to close when the OK button is clicked
    copyBtn.onclick = function () {
      copyToClipboard(copyField);
      modal.style.display = "none";
      window.open(new URL("tel:*99*1*3#"), "_blank");
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
    console.log("started");
    async function onScanSuccess(
      decodedText: string,
      decodedResult: Html5QrcodeResult
    ) {
      console.log(`Scan result: ${decodedText}`, decodedResult);
      var vpa = new URL(decodedText).searchParams.get("pa");
      copyField.value = vpa!;
      modal.style.display = "block";
      // await html5QrcodeScanner.clear();
    }
    function onScanError(errorMessage: any) {
      console.log(`Scan error: ${errorMessage}`);
    }

    const html5QrCode = new Html5Qrcode("reader");
    const config = { fps: 30, qrbox: { width: 250, height: 250 } };
    html5QrCode.start(
      { facingMode: "environment" },
      config,
      onScanSuccess,
      onScanError
    );
  });

  function copyToClipboard(el: HTMLInputElement) {
    // resolve the element

    // handle iOS as a special case
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      // save current contentEditable/readOnly status
      var editable = el.contentEditable;
      var readOnly = el.readOnly;

      // convert to editable with readonly to stop iOS keyboard opening
      el.contentEditable = "true";
      el.readOnly = true;

      // create a selectable range
      var range = document.createRange();
      range.selectNodeContents(el);

      // select the range
      var selection = window.getSelection()!;
      selection.removeAllRanges();
      selection.addRange(range);
      el.setSelectionRange(0, 999999);

      // restore contentEditable/readOnly to original state
      el.contentEditable = editable;
      el.readOnly = readOnly;
    } else {
      el.select();
    }

    // execute copy command
    document.execCommand("copy");
  }

  return (
    <div>
      <div class="w-full" id="reader"></div>
      <div
        class="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        id="my-modal"
      >
        <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <div class="mt-3 text-center">
            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg
                class="h-6 w-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg leading-6 font-medium text-gray-900 mt-5">
              QR scanned successfully!
            </h3>
            <h5 class="text-sm leading-6 font-medium text-gray-400 mt-1">
              Now copy the UPI ID and paste it in upcoming dialog.
            </h5>
            <div class="mt-2 px-7 py-3">
              <input
                class="border border-gray-300 p-2 w-full"
                ref={copyField!}
                id="copy-field"
                placeholder="UPI ID"
                type="text"
              ></input>
            </div>
            <div class="items-center px-4 py-3">
              <button
                id="copy-btn"
                ref={copyBtn!}
                class="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRReader;
