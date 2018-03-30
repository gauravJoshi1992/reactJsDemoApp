export default function () {

	var id = 0;

	var data = [
		{
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 400,
			"Power saving mode": true,
			"Egg Tray": false,
		}, {
			"Compressor Type": "Smart Inverter",
			"type": "Double Door",
			"Capacity": "250",
			"price": 50000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Ariana",
			"Net Height": 1372,
			"Net Depth": 746,
			"Net Width": 623,
			"Weight": 52,
			"color": "Gray",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": false,
			"Manufacture Year": 2015,
			"warranty": 5,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": false,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Double Door",
			"Capacity": "192",
			"price": 50000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1372,
			"Net Depth": 746,
			"Net Width": 623,
			"Weight": 36,
			"color": "Blue",
			"model": "LG32J5500AK",
			"brand": "LG",
			"Power Consmption": 400,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Smart Inverter",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": false,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 52,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": false,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Double Door",
			"Capacity": "250",
			"price": 50000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Ariana",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 5,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Gray",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": false,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": false,
			"Manufacture Year": 2015,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1372,
			"Net Depth": 746,
			"Net Width": 623,
			"Weight": 36,
			"color": "Blue",
			"model": "LG32J5500AK",
			"brand": "LG",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Double Door",
			"Capacity": "192",
			"price": 50000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 400,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Smart Inverter",
			"type": "Single Door",
			"Capacity": "250",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Ariana",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 52,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 5,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": false,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Double Door",
			"Capacity": "192",
			"price": 50000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1372,
			"Net Depth": 746,
			"Net Width": 623,
			"Weight": 36,
			"color": "Gray",
			"model": "LG32J5500AK",
			"brand": "LG",
			"Power Consmption": 600,
			"Power saving mode": false,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Single Door",
			"Capacity": "250",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": false,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2016,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 400,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Smart Inverter",
			"type": "Double Door",
			"Capacity": "192",
			"price": 50000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 5,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": false,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 52,
			"color": "Blue",
			"model": "LG32J5500AK",
			"brand": "LG",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Single Door",
			"Capacity": "250",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Ariana",
			"Net Height": 1372,
			"Net Depth": 746,
			"Net Width": 623,
			"Weight": 36,
			"color": "Gray",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": false,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Double Door",
			"Capacity": "192",
			"price": 50000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": false,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2016,
			"warranty": 5,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 400,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Smart Inverter",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": false,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 72,
			"color": "Blue",
			"model": "LG32J5500AK",
			"brand": "LG",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Double Door",
			"Capacity": "250",
			"price": 50000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Ariana",
			"Net Height": 1372,
			"Net Depth": 746,
			"Net Width": 623,
			"Weight": 36,
			"color": "Maroon",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 500,
			"Power saving mode": true,
			"Egg Tray": false,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2015,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 72,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Smart Inverter",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": false,
			"Manufacture Year": 2017,
			"warranty": 5,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Maroon",
			"model": "Sansui32J5500AK",
			"brand": "Sansui",
			"Power Consmption": 600,
			"Power saving mode": false,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Double Door",
			"Capacity": "250",
			"price": 50000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2016,
			"warranty": 2,
			"Handle Type": "Ariana",
			"Net Height": 1372,
			"Net Depth": 746,
			"Net Width": 623,
			"Weight": 36,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 500,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Smart Inverter",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": false,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 72,
			"color": "Maroon",
			"model": "Sansui32J5500AK",
			"brand": "Sansui",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Double Door",
			"Capacity": "192",
			"price": 50000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": false,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2016,
			"warranty": 5,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Single Door",
			"Capacity": "250",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": false,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1372,
			"Net Depth": 746,
			"Net Width": 623,
			"Weight": 36,
			"color": "Maroon",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 500,
			"Power saving mode": false,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Blue",
			"model": "Sansui32J5500AK",
			"brand": "Sansui",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Smart Inverter",
			"type": "Double Door",
			"Capacity": "192",
			"price": 50000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Ariana",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2015,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Double Door",
			"Capacity": "192",
			"price": 50000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 72,
			"color": "Maroon",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": false,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Single Door",
			"Capacity": "250",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": false,
			"Manufacture Year": 2017,
			"warranty": 5,
			"Handle Type": "Chrome",
			"Net Height": 1372,
			"Net Depth": 746,
			"Net Width": 623,
			"Weight": 36,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 500,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Blue",
			"model": "Sansui32J5500AK",
			"brand": "Sansui",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Smart Inverter",
			"type": "Double Door",
			"Capacity": "192",
			"price": 50000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Ariana",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2015,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": false,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Maroon",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Double Door",
			"Capacity": "250",
			"price": 50000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1372,
			"Net Depth": 746,
			"Net Width": 623,
			"Weight": 72,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": false,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": false,
			"Manufacture Year": 2017,
			"warranty": 5,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Blue",
			"model": "Sansui32J5500AK",
			"brand": "Sansui",
			"Power Consmption": 500,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Smart Inverter",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2016,
			"warranty": 2,
			"Handle Type": "Ariana",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Double Door",
			"Capacity": "192",
			"price": 50000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": false,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Single Door",
			"Capacity": "250",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1372,
			"Net Depth": 746,
			"Net Width": 623,
			"Weight": 36,
			"color": "Maroon",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Smart Inverter",
			"type": "Double Door",
			"Capacity": "192",
			"price": 50000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2017,
			"warranty": 5,
			"Handle Type": "Ariana",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 36,
			"color": "Blue",
			"model": "Sansui32J5500AK",
			"brand": "Sansui",
			"Power Consmption": 600,
			"Power saving mode": true,
			"Egg Tray": true,
		}, {
			"Compressor Type": "Reciprocatory Compressor",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": false,
			"Manufacture Year": 2017,
			"warranty": 2,
			"Handle Type": "Chrome",
			"Net Height": 1192,
			"Net Depth": 649,
			"Net Width": 532,
			"Weight": 72,
			"color": "Gray",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 500,
			"Power saving mode": false,
			"Egg Tray": false,
		}, {
			"Compressor Type": "Smart Inverter",
			"type": "Single Door",
			"Capacity": "192",
			"price": 30000,
			"Star Rating": "3",
			"Built-in Stabilizer": true,
			"Manufacture Year": 2016,
			"warranty": 5,
			"Handle Type": "Ariana",
			"Net Height": 1372,
			"Net Depth": 746,
			"Net Width": 623,
			"Weight": 36,
			"color": "Blue",
			"model": "Samsung32J5500AK",
			"brand": "Samsung",
			"Power Consmption": 600,
			"Power saving mode": false,
			"Egg Tray": true,
		}
	];

	data.forEach(function (value) {

		value.id = ++id;
	});

	return data;
}
