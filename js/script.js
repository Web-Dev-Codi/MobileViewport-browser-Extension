const phonePicker = document.getElementById('phone-models')

const phoneModelObject = {
  iphoneX: {
    width: 375,
    height: 812,
    imageURL: "",
  },
  Galaxy_S20: {
    width: 360,
    height: 800,
    imageURL: "",
  },
  Iphone_678: {
    width: 414,
    height: 896,
    imageURL: "",
  },
  Galaxy_S20_Plus: {
    width: 384,
    height: 854,
    imageURL: "",
  },
  Iphone_XR_11: {
    width: 414,
    height: 896,
      imageURL: "",
  },
  Galaxy_Note: {
    width: 412,
    height: 915,
    imageURL: "",
  },
  Huawei_P40: {
    width: 412,
    height: 915,
    imageURL: "",
  },
}


phonePicker.addEventListener('input', (e) => {
  console.log(e.target.value)
})
