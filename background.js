// Đăng ký một sự kiện khi extension được cài đặt
chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension Installed!');
  });
  
  // Xác định hành động khi icon của extension được nhấp
  chrome.action.onClicked.addListener((tab) => {
    console.log('Extension Icon Clicked!');
    // Thực hiện một hành động nào đó, ví dụ: mở một popup
    chrome.action.setPopup({ tabId: tab.id, popup: 'popup.html' });
  });
  