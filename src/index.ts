$(function () {

  let title = document.getElementById("mytitle");
  title!.innerHTML = "Hello World";

  let _currencyfrom: Element = document.querySelector('#CurrencyFrom')!;
  let _currencyto = document.querySelector('#CurrencyTo')!;

  $('#calculate').prop("disabled", true);

  const bindList = (data: object, list: Element) => {
    for (const [key, value] of Object.entries(data)) {

      let option = document.createElement('option');

      option.textContent = key;
      option.value = value;

      list.appendChild(option);
    }
  }

  $("#CurrencyFrom").change(function () {
    $('#amt_from').focus();
    $('#spn_from').text(String($('#CurrencyFrom').val()));
    $('#calculate').prop("disabled", false);
  });

  $("#amt_from").change(function () {

    var result = Number($(this).val()) * Number($('#CurrencyFrom').val());

    if ($('#CurrencyTo').val() === 'Choose Currency To') {

      $('#CurrencyTo').focus();
    } else {

      Calculation();
    }
    // $('#spn_from').text(result);
    // $('#spn_from').text(String($('#CurrencyFrom').val()));
  });

  $("#CurrencyTo").change(function () {
    Calculation();
  });

  $("#clear").click(function () {
    Clear();
  });

  $("#calculate").click(function () {
    Calculation();
  });


  const Calculation = () => {
    if (Number($('#CurrencyFrom').val()) > Number($('#CurrencyTo').val())) {
      var result = Number($('#amt_from').val()) / Number($('#CurrencyFrom').val());
      // let converted_amt = Number(result) * Number($('#CurrencyTo').val());

      $('#spn_to').text(String($('#CurrencyTo').val()));
      $('#amt_to').val(Math.round(result));

      console.log("if", Number($('#CurrencyFrom').val()) , Number($('#CurrencyTo').val()));
      

    } else {

      var result = Number($('#CurrencyTo').val()) / Number($('#CurrencyFrom').val());
      let converted_amt = Number(result) * Number($('#amt_from').val());

      $('#spn_to').text(String($('#CurrencyTo').val()));
      $('#amt_to').val(Math.round(converted_amt));

      console.log("else");
    }

  }

  const Clear = () => {
    $('#CurrencyFrom').prop('selectedIndex', 0);
    $('#CurrencyTo').prop('selectedIndex', 0);
    $('#amt_from').val('');
    $('#amt_to').val('');
    $('#spn_to').text(0);
    $('#spn_from').text(0);

  }


  async function getData() {
    try {
      const response = await fetch("https://v6.exchangerate-api.com/v6/089398a1850f554cbb2a6747/latest/USD");
      const data = await response.json();
      // console.log(data["conversion_rates"]);

      bindList(data["conversion_rates"], _currencyfrom);
      bindList(data["conversion_rates"], _currencyto);

      // let data = { 'AED': '3.6725', 'AFN': '87.0355', 'ALL': '107.7208', 'AMD': '394.8556', 'ANG': '1.79', 'AOA': '510.2459', 'ARS': '172.1167', 'AUD': '1.4944', 'AWG': '1.79', 'AZN': '1.701', 'BAM': '1.8447', 'BBD': '2', 'BDT': '103.82', 'BGN': '1.8444', 'BHD': '0.376', 'BIF': '2060.9092', 'BMD': '1', 'BND': '1.3569', 'BOB': '6.9276', 'BRL': '5.2978', 'BSD': '1', 'BTN': '82.8022', 'BWP': '12.9017', 'BYN': '2.5179', 'BZD': '2', 'CAD': '1.3676', 'CDF': '2055.67', 'CHF': '0.9325', 'CLP': '877.1415', 'CNY': '6.9708', 'COP': '4778.5575', 'CRC': '594.1419', 'CUP': '24', 'CVE': '103.998', 'CZK': '22.8431', 'DJF': '177.721', 'DKK': '7.0364', 'DOP': '55.1146', 'DZD': '137.6086', 'EGP': '24.7012', 'ERN': '15', 'ETB': '53.5329', 'EUR': '0.9428', 'FJD': '2.1917', 'FKP': '0.8225', 'FOK': '7.0364', 'GBP': '0.8225', 'GEL': '2.6694', 'GGP': '0.8225', 'GHS': '10.1172', 'GIP': '0.8225', 'GMD': '62.9592', 'GNF': '8699.7764', 'GTQ': '7.8762', 'GYD': '209.276', 'HKD': '7.7826', 'HNL': '24.6832', 'HRK': '7.1063', 'HTG': '145.4871', 'HUF': '382.6142', 'IDR': '15594.9852', 'ILS': '3.4575', 'IMP': '0.8225', 'INR': '82.8023', 'IQD': '1459.3077', 'IRR': '42001.0926', 'ISK': '141.7853', 'JEP': '0.8225', 'JMD': '153.3617', 'JOD': '0.709', 'JPY': '136.7493', 'KES': '122.9709', 'KGS': '84.9269', 'KHR': '4128.1071', 'KID': '1.4944', 'KMF': '464.0062', 'KRW': '1309.8518', 'KWD': '0.3064', 'KYD': '0.8333', 'KZT': '468.2757', 'LAK': '17185.7366', 'LBP': '1507.5', 'LKR': '365.9386', 'LRD': '154.1895', 'LSL': '17.6275', 'LYD': '4.8303', 'MAD': '10.4566', 'MDL': '19.3702', 'MGA': '4411.8472', 'MKD': '58.0508', 'MMK': '2099.0938', 'MNT': '3436.0187', 'MOP': '8.0161', 'MRU': '37.6483', 'MUR': '43.7998', 'MVR': '15.4635', 'MWK': '1032.7886', 'MXN': '19.801', 'MYR': '4.4227', 'MZN': '64.133', 'NAD': '17.6275', 'NGN': '445.5314', 'NIO': '36.5111', 'NOK': '9.8954', 'NPR': '132.4836', 'NZD': '1.5697', 'OMR': '0.3845', 'PAB': '1', 'PEN': '3.8209', 'PGK': '3.5233', 'PHP': '55.4951', 'PKR': '224.8839', 'PLN': '4.4157', 'PYG': '7230.2891', 'QAR': '3.64', 'RON': '4.6334', 'RSD': '110.3675', 'RUB': '64.7168', 'RWF': '1091.0102', 'SAR': '3.75', 'SBD': '8.1974', 'SCR': '13.1635', 'SDG': '546.8965', 'SEK': '10.3936', 'SGD': '1.3569', 'SHP': '0.8225', 'SLE': '18.7692', 'SLL': '18769.2019', 'SOS': '568.5237', 'SRD': '31.8887', 'SSP': '670.4723', 'STN': '23.1075', 'SYP': '2489.9228', 'SZL': '17.6275', 'THB': '34.9393', 'TJS': '10.1923', 'TMT': '3.4999', 'TND': '3.1209', 'TOP': '2.3712', 'TRY': '18.6577', 'TTD': '6.771', 'TVD': '1.4944', 'TWD': '30.6601', 'TZS': '2336.0922', 'UAH': '36.8749', 'UGX': '3688.9927', 'USD': '1', 'UYU': '38.7663', 'UZS': '11327.7668', 'VES': '15.7668', 'VND': '23592.458', 'VUV': '120.7906', 'WST': '2.6871', 'XAF': '618.675', 'XCD': '2.7', 'XDR': '0.7523', 'XOF': '618.675', 'XPF': '112.5496', 'YER': '250.3095', 'ZAR': '17.6277', 'ZMW': '17.6068', 'ZWL': '672.0807' };
      // bindList(data, _currencyfrom);
      // bindList(data, _currencyto);

    } catch (error) {
      console.error(error);
    }
  }

  getData();

});
