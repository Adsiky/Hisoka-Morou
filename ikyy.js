////// WHATSAPP BOT 100-400K
///// WhatsApp : 085215319934

/////////////////////////////
/////////////////////////////


////// KONSTAN MODULE
let { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
let fs = require('fs')
let util = require('util')
let chalk = require('chalk')
let { exec, spawn, execSync } = require("child_process")
let axios = require('axios')
let path = require('path')
let os = require('os')
let moment = require('moment-timezone')
let { JSDOM } = require('jsdom')
let speed = require('performance-now')
let { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

////// MEDIA

let kbihu = "https://telegra.ph/file/a4ffeb0e010ce5472b6de.jpg"
let dkm_masjid = "https://telegra.ph/file/12d879b37b57d5803ed63.jpg"
let catering = "https://telegra.ph/file/e23c538bca059f8181af8.jpg"
let warungdt = "https://telegra.ph/file/71ce6b59324f9f8e1c8a1.jpg"
let dteo = "https://telegra.ph/file/279fa1837feb10e665d05.jpg"
let material = "https://telegra.ph/file/a1457a40c06fd5fbcdb6b.jpg"
let pesantren_gede = "https://telegra.ph/file/cacbb4a963f26758ee071.jpg"
let klinikdt = "https://telegra.ph/file/5064d42319dee30d7be35.jpg"
let logobaruDt = "https://telegra.ph/file/08850f1fe3ed54a82f916.jpg"
let eec_pesantren = "https://telegra.ph/file/7e68f450a782d0497eadc.jpg"
let tokoonline = "https://telegra.ph/file/349fc31044088995f74bf.jpg"
let wisata_hikmah = "https://telegra.ph/file/0b2bc994b3359ed80b32e.jpg"
let dtenglish = "https://telegra.ph/file/c0cca1ef3bb98fb0dce88.jpg "
let dauroh = "https://telegra.ph/file/37229ae7f134469a80f1b.jpg "
let bbq_tiny = "https://telegra.ph/file/cc210d5b3491429bc9120.jpg"
let halqahrmdn = "https://telegra.ph/file/17abaf88bd5da06d0c925.jpg "
let pmk = "https://telegra.ph/file/267b188c819278d159cd6.jpg "
let loc_diniyahformal = "https://telegra.ph/file/dcb7fa80e68cfd6dfd705.jpg "
let ppm_i = "https://telegra.ph/file/078cc794f9c6f1c30d0ea.jpg"
let keseteraan = "https://telegra.ph/file/c4fd343ee7d5c0243e609.jpg "
let paudsejenis = "https://telegra.ph/file/3c32cb3f4ed297715a21f.jpg"




module.exports = ikyy = async (ikyy, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.Â©^]/gi.test(body) ? body.match(/^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.Â©^]/gi)[0] : "" : prefa ?? global.prefix
var isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await ikyy.decodeJid(ikyy.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false

const text = m.q = args.join(" ")
 q = args.join(' ')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')

 if(time2 < "23:59:00"){

var ucapaWaktu = 'اسلام عليكم ورحمة الله وبركاته'
 }
 if(time2 < "19:00:00"){
var ucapaWaktu = 'اسلام عليكم ورحمة الله وبركاته'
 }
 if(time2 < "18:00:00"){
var ucapaWaktu = 'اسلام عليكم ورحمة الله وبركاته'
 }
 if(time2 < "15:00:00"){
var ucapaWaktu = 'اسلام عليكم ورحمة الله وبركاته'
 }
 if(time2 < "11:00:00"){
var ucapaWaktu = 'اسلام عليكم ورحمة الله وبركاته'
 }
 if(time2 < "05:00:00"){
var ucapaWaktu = 'اسلام عليكم ورحمة الله وبركاته'
 }
// Public & Self
if (!ikyy.public) {
if (!m.key.fromMe) return
}
try {

let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
} else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
}
		
	
} catch (err) {
console.error(err)
}

// Push Message To Console && Auto Read
if (m.message) {
ikyy.sendReadReceipt(m.chat, m.sender, [m.key.id])
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}
	
	// reset limit every 12 hours
let cron = require('node-cron')

	
	 
 // Mute Chat
 
const reply = (teks) => {

  var ids = teks.includes('@') ? teks.split('@'): []

  let semdertag = []
  for (var con of ids) {
 semdertag.push(con.split(' ')[0]+'@s.whatsapp.net')
  }
  ikyy.sendMessage(m.chat, {text:teks},  {
 quoted: m, thumbnail: fs.readFileSync('./lib/ikyy.jpg'), contextInfo: {
mentionedJid: semdertag }});
}
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: ikyy.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, ikyy.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
ikyy.ev.emit('messages.upsert', msg)
}
	switch(command) {


////// MENU HELP BUTTON 1 PAKET

//1.________________________________

case "help": case "menu":

{

menu =`${ucapaWaktu}

Assalamu'alaikum\nWarahmatullahi Wabarakatuh,
*${pushname}* 👋
 
Saya adalah *DT INFO*
yang siap membantu anda melayani Informasi *seputar Program Daarut Tauhiid dan Kajian KH. Abdullah Gymnastiar ( Aa Gym )*

1X 24 Jam
`
btn = [{
 
 urlButton: {
displayText: 'Website Info',
url: 'https://linktr.ee/InfoDT'
}
},  {

 quickReplyButton: {

displayText: 'Pendidikan Diniyah Formal (PDF)',
id: 'programdt'
 }  
  }, {
 quickReplyButton: {
displayText: 'Baitul Qur’an',
id: 'd2'
 }
  }
 ,
{
 quickReplyButton: {
displayText: 'DKM Masjid Daarut Tauhiid',
id: 'd3'
 }
  }]
  
  ikyy.send5ButImg(m.chat, menu,` ` , { url: pesantren_gede } , btn)
  
}
  
  break

//2.________________________________

case "programdt":

{

captprogg =`Berikut ini merupakan Program unggulan di DaarutTauhiid
`

  btn = [{
 
 urlButton: {
displayText: 'Website',
url: 'https://daaruttauhiid.org/'
}
}, 
{
urlButton: {
displayText: 'Instagram',
url: 'https://instagram.com/daarut.tauhiid/ '
}
},
  {
 quickReplyButton: {
displayText: 'Pesantren',
id: 'pesantren'
 }  
  }, {
 quickReplyButton: {
displayText: 'Pendidikan',
id: 'pendidikan'
 }
  }
 ,
{
 quickReplyButton: {
displayText: 'Lemstra',
id: 'lemstra'
 }
  }]
  

  ikyy.send5ButImg(m.chat, captprogg,` ` , { url: pesantren_gede } , btn)
  
}
break

//3.________________________________

case "pesantren2":

{

captp2 =`Berikut ini merupakan Program unggulan di DaarutTauhiid
`
btn = [{
 
 urlButton: {
displayText: 'Instagram',
url: 'https://instagram.com/daarut.tauhiid/'
}
}, 
 {
 quickReplyButton: {
displayText: 'Pendidikan Diniyah Formal',
id: 'e1'
 }  
  }, {
 quickReplyButton: {
displayText: 'Baitul Qur’an',
id: 'e2'
 }
  }
 ,
{
 quickReplyButton: {
displayText: 'DKM Masjid Daarut Tauhiid',
id: 'e3'
 }
  }]
ikyy.send5ButImg(m.chat, captp2,` ` , { url: pesantren_gede } , btn)
  
}
break

//// PROGRAM DT PESANTREN
//// LIST MESSAGE
//4.________________________________

case "lemstra":
{
    let seeections = [

{
title: "  ",
rows: [
{title: `A3.1. Klinik Kesehatan`,rowId: `c1`, description: ``},
	{title: `A3.2. Daycare`,rowId: `c2`, description: ``},
	{title: `A3.3. Wisata Hikmah`,rowId: `c3`, description: ``},
	{title: `A3.4. Daarut Tauhiid Event Organizer`,rowId: `c4`, description: ``},
	{title: `A3.5. Warung DT`,rowId: `c5`,description: ``},
	{title: `A3.6. Usaha Produktif`,rowId: `c6`, description: ``},
] },]
ikyy.sendListMsg(m.chat, `A3. LEMSTRA DT

Merupakan Layanan Program Lembaga Strategis DT

- Kesehatan 
- Wisata Hikmah
- Argo Bisnis
- Usaha Produktif`,  ` `, `${ucapaWaktu}\n`, `Click Here`, seeections, )
  }
  
  //5.________________________________

case "p1": case "pesantren":
  {
    let seeections = [

{
title: "  ",
rows: [
{title: "1. DKM ", rowId: `dkm`, description: ``},
{title: "2. Baitul Qur'an", rowId: `baitulquran`, description: ``},
{title: "3. Pusat Kegiatan Belajar Masyarakat", rowId: `pkbm`, description: ``},
{title: "4. Pendidikan Diniyah Formal (PDF)", rowId: `diniyahformal`, description: ``}
] },]
ikyy.sendListMsg(m.chat, `*A1.* Pesantren DT

Merupakan Layanan *Program Kepesantrenan Daarut Tauhiid* :
- DKM DT
- Baitul Qur'an
- Pendidikan Diniyah Formal
- PMK, DQ, PPM
- Kesetaraan Paket A, B dan C
- Kursus Bahasa`, ` `, `${ucapaWaktu}\n`, `Click Here`, seeections, )
  }
  break
 
////PROGRAM DT PENDIDIKAN
//6.________________________________

case "p2": case "pendidikan":
  {
    let seeections = [

{
title: "  ",
rows: [
{title: "A2.1 PG Daarut Tauhid", rowId: `b1`, description: ``},
{title: "A2.2 TK Daarut Tauhid", rowId: `b2`, description: ``},
{title: "A2.3 SD Daarut Tauhid", rowId: `b3`, description: ``},
	{title: `A2.4 SMP DT Boarding School Putra`,rowId: `b4`, description: ``},
	{title: `A2.5 SMP DT Boarding School Putri`,rowId: `b5`,description: ``},
	{title: `A2.6 SMP DT Boarding School Batam`,rowId: `b6`,description: ``},
	{title:	`A2.7 SMP Adzkia Islamic School DT`,rowId: `b7`,description: ``},
	{title: `A2.8 SMA DT Boarding School Putra`,rowId: `b8`,description: ``},
	{title: `A2.9 SMA DT Boarding School Putri`,rowId: `b9`,description: ``},
	{title: `A2.10 SMA Adzkia Islamic School DT`,rowId: `b10`,description: ``},
	{title: `A2.11 SMK DT Boarding School`,rowId: `b11`,description: ``},
	{title: `A2.12 STAI Daarut Tauhiid`,rowId: `b12`,description: ``},
] },]
  
ikyy.sendListMsg(m.chat, `A2. Pendidikan Daarut Tauhiid

Layanan pendidikan mulai dari Playgroup/TK hingga STAI`, ` `,`${ucapaWaktu}\n`,`Click Here`, seeections, )
  }
  break

///ISI LIST MESSAGE P1 ( PESANTREN )
//7.________________________________

case "a1":
{
  reply (`maap ya kak fitur ini masih dalam tahap pengembangan`) }

	break
case "a2":
{
  reply (`maap ya kak fitur ini masih dalam tahap pengembangan`) }

	break
case "a3":
{
  reply (`maap ya kak fitur ini masih dalam tahap pengembangan`) }

	break
case "a4":
{
  reply (`maap ya kak fitur ini masih dalam tahap pengembangan`) }

	break

/// ISI LIST MESSAGE P2 ( PENDIDIKAN )


case "b1":
{
}
break
case "b2":
  {
  reply (`maap ya kak fitur ini masih dalam tahap pengembangan`) }
  break
  case "b3":
  {
  reply (`maap ya kak fitur ini masih dalam tahap pengembangan`) }
  break
case "b3":
{
  reply (`maap ya kak fitur ini masih dalam tahap pengembangan`) }

	break
case "b4":
{
  reply (`maap ya kak fitur ini masih dalam tahap pengembangan`) }

	break
case "b5":
{
  reply (`maap ya kak fitur ini masih dalam tahap pengembangan`) }

	break
case "b6":
{
  reply (`maap ya kak fitur ini masih dalam tahap pengembangan`) }

	break
case "b7":
{
  reply (`maap ya kak fitur ini masih dalam tahap pengembangan`) }

	break
case "b8":
{
  reply (`maap ya kak fitur ini masih dalam tahap pengembangan`) }

	break
case "b9":
{
  reply (`maap ya kak fitur ini masih dalam tahap pengembangan`) }

	break
case "b10":
{
  reply (`maap ya kak fitur ini masih dalam tahap pengembangan`) }

	break
case "b11":
{
  reply (`maap ya kak fitur ini masih dalam tahap pengembangan`) }

	break
case "b12":
{
  reply (`maap ya kak fitur ini masih dalam tahap pengembangan`) }

	break

//// ISI BUTON ID PESANTREN2



case "e1":
{
	menu =`*A1.4. Pendidikan Diniyah Formal (PDF)*

*PDF DT* merupakan Pendidikan Formal dibawah Kementrian Agama Republik Indonesia, 
berbasis tradisi Pesantren Salaf dengan kurikulum khas Pesantren Daarut Tauhiid.

*Syarat Pendaftaran :*
Persyaratan Pendaftaran Tingkat Wustha (SMP) :
1. Melakukan pendaftaran online ://bit.ly/daftarPDFDT
2. Scan Kartu Keluarga
3. Scan Akta Kelahiran
4. Pas foto ukuran 3x4 (maksimal 1 Mb)
5. Scan Ijazah terakhir 
6. Scan Surat keterangan sehat dari dokter
7. Transfer infak pendaftaran sebesar Rp. 300.000

*Link Pendaftaran :* https://bit.ly/daftarPDFDT 

*Kontak Person :* 
0812 2055 346 (Ustadz Mumuh A Muhyi)
0819 1020 6060 (Adam Pujanegara)
`
btn = [{
 
 urlButton: {
displayText: 'Link Pendaftaran',
url: 'https://bit.ly/daftarPDFDT'
}
}]
ikyy.send5ButImg(m.chat, menu,` ` , { url: loc_diniyahformal } , btn)

	}
	break
case "e2":
{
  reply (`maap ya kak fitur ini masih dalam tahap pengembangan`) }

	break
case "e3":
{
  reply (`maap ya kak fitur ini masih dalam tahap pengembangan`) }

	break

////// ISI BUTTON ID MENU



case "d1":
{
  reply (`maap ya kak fitur ini masih dalam tahap pengembangan`) }

	break
case "d2":
{
  reply (`maap ya kak fitur ini masih dalam tahap pengembangan`) }

	break
case "d3":
{
  reply (`maap ya kak fitur ini masih dalam tahap pengembangan`) }

	break
case "d4":
{
  reply (`maap ya kak fitur ini masih dalam tahap pengembangan`) }

	break

////// CASE 18.js
case 'katalogdtq':
menu =`*A1.2.9. Dauroh Tahsin Al Quran (DTQ)*

Merupakan program Talaqqi (perbaikan) bacaan Al Quran surat Al-Fatihah dan surat pendek Juz 30, setiap Jumat selama 1 bulan.

*Info Biaya :*
• Pendaftaran : Rp. 50.000
• Pendidikan : Rp. 100.000

*Link Pendaftaran :*
https://pesantrendt.org/pendaftaran/program/47

*Kontak Person :*
0878 2502 2225
`
btn = [{
 
 urlButton: {
displayText: 'Link Pendaftaran',
url: 'https://pesantrendt.org/pendaftaran/program/'

}, }]
  
  ikyy.send5ButImg(m.chat, menu,` ` , { url: pesantren_gede } , btn)
	
break
//// 2
case 'halaqahramadhan':
menu =`*A1.2.10. Halaqah Tahfidz Ramadhan (HTR)*

Merupakan program menghafal Al Quran selama 20 hari di bulan Ramadhan secara daring.

*Info Benefit :*
➥ Bimbingan Muhafidz/ah Baitul Quran DT
➥ Ziyadah Hafalan
(target minimal 1 juz dalam 20 hari)
➥ Motivasi Qurani setiap hari
➥ Tadabbur Quran (pekanan)
➥ Target & kontroling Ibadah Harian
➥ Sertifikat (SKB)
 
*Link Pendaftaran :*
https://pesantrendt.org/pendaftaran/program/4

Kontak Person :
0878 2502 2225
`
btn = [{
 
 urlButton: {
displayText: 'Link Pendaftaran',
url: 'https://pesantrendt.org/pendaftaran/program/4'
},}]
  
  ikyy.send5ButImg(m.chat, menu,` ` , { url: pesantren_gede } , btn)
	break
//// 3
case 'bimbinganbacaq':
menu =`*A1.2.8.	Bimbingan Baca Al-Qur’an (BBQ)*

*BBQ* Merupakan program bimbingan membaca Al Quran sebanyak 12 kali pertemuan,
dengan metode Talaqqi yang dibimbing langsung oleh tim pengajar
Baitul Quran - Pesantren Daarut Tauhiid

*Info Biaya :*
• Pendaftaran : *Rp. 50.000,-*
• Pendidikan selama 1 Periode /
12x pertemuan :
  - Online  : Rp. 400.000,-
  - Offline : Rp. 500.000,-
  *Diperbolehkan ditransfer sekaligus
  (biaya pendaftaran + pendidikan)

*Link Pendaftaran :* 
https://pesantrendt.org/pendaftaran/program/6

*Kontak Person :* 
0878 2502 2225
`
btn = [{
 
 urlButton: {
displayText: 'Link Pendaftaran',
url: 'https://pesantrendt.org/pendaftaran/program/47'

},}]
  
  ikyy.send5ButImg(m.chat, menu,` ` , { url: bbq_tiny } , btn)
  break
///
  case 'diniyahformal':
menu =`*A1.4. Pendidikan Diniyah Formal (PDF)*

*PDF DT* merupakan Pendidikan Formal dibawah Kementrian Agama Republik Indonesia, 
berbasis tradisi Pesantren Salaf dengan kurikulum khas Pesantren Daarut Tauhiid.

*Syarat Pendaftaran :*
Persyaratan Pendaftaran Tingkat Wustha (SMP) :
1. Melakukan pendaftaran online di https://bit.ly/daftarPDFDT
2. Scan Kartu Keluarga
3. Scan Akta Kelahiran
4. Pas foto ukuran 3x4 (maksimal 1 Mb)
5. Scan Ijazah terakhir 
6. Scan Surat keterangan sehat dari dokter
7. Transfer infak pendaftaran sebesar Rp. 300.000

*Link Pendaftaran :* https://bit.ly/daftarPDFDT 

*Kontak Person :* 
0812 2055 346 (Ustadz Mumuh A Muhyi)
0819 1020 6060 (Adam Pujanegara)
`
btn = [{
 
 urlButton: {
displayText: 'Link Pendaftaran',
url: 'https://bit.ly/daftarPDFDT'
},  
  }]
  
  ikyy.send5ButImg(m.chat, menu,` ` , { url: loc_diniyahformal_tiny } , btn)
  break
	////
	case "dkm_masjid":
	  {
	    menu =`*A1.1. DKM Masjid Daarut Tauhiid*



📌 *Masjid DT Bandung*
biolinky.co/masjiddtbandung

▶️ *Instagram*
https://instagram.com/masjiddtbandung

📞 *No. Kontak*
081910206060
08112000480

📌 *Masjid Eco Pesantren DT*
www.daaruttauhiidvirtual.com

▶️ *Instagram*
https://instagram.com/masjiddt_ecopesantren

📞 *No. Kontak*
08112004449

📞 *No. Kontak*
081380007729

📌 *Masjid DT Batam*`
btn = [{

 

 urlButton: {
displayText: '*Masjid DT Jakarta',
url: 'http://s.id/InfoMasjidDTJKT'
} }
,{
urlButton: {
displayText: '*Instagram*',
url: 'https://instagram.com/masjiddaaruttauhiid.jkt'
} },
{
 quickReplyButton: {
displayText: 'KBIHU',
id: 'kbihu'
  },}]
  
  ikyy.send5ButImg(m.chat, menu,` ` , { url: dkm_masjid } , btn)

	  }
	  break

case 'kbihu':
{
menu =`*A1.1.1. KBIHU*

🕋 *Haji dan Umroh Daarut Tauhiid Bandung*


📞 *No. Kontak*
(022)2003780

🕋 *Haji dan Umroh Daarut Tauhiid Jakarta*


📞 *No. Kontak*
081294301616
`
btn = [{

 urlButton: {
displayText: '*Instagram 1*',
url: 'https://instagram.com/kbihudaaruttauhiid_bdg'
} }
,{
urlButton: {
displayText: '*Instagram 2*',
url: 'https://instagram.com/kbihdaaruttauhiid.jkt'
} },
{
 quickReplyButton: {
displayText: 'back',
id: 'dkm_masjid'
  },}]
  
  ikyy.send5ButImg(m.chat, menu,` ` , { url: dkm_masjid } , btn)
}
break
////
case 'daycare':
{
menu =`*A3.2. Daycare*

*Hotline Klinik DT*
0896-2582-8853
0812-2427-590
`
btn = [{



 urlButton: {
displayText: '*Instagram*',
url: 'https://instagram.com/daycaredaaruttauhiid'
} }
,
{
 quickReplyButton: {
displayText: 'back',
id: 'lemstra'
  },}]
  
  ikyy.send5ButImg(m.chat, menu,` ` , { url: klinikdt } , btn)
	}
	break
case 'klinik':
{
menu =`*A3.1. Klinik Kesehatan*

- Layanan Dokter Umum & Gigi
- Layanan Dokter Spesialis Kandungan
- Layanan Psikolog
- Layanan Khitan

*Hotline Klinik DT*
0896-2582-8853
0812-2427-590
`
btn = [{

 urlButton: {
displayText: '*Instagram*',
url: 'https://instagram.com/klinik.daaruttauhiid'
} }
,
{
 quickReplyButton: {
displayText: 'back',
id: 'lemstra'
  },}]
  
  ikyy.send5ButImg(m.chat, menu,` ` , { url: klinikdt } , btn)
}
break
////
	case 'dauroh':
menu =`*A1.3.2.	Dauroh Qolbiyah (DQ)*

Program *DQ* merupakan program pesantren mukim selama 30 hari untuk usia 17-40 tahun dengan tujuan membentuk pribadi santri yang memiliki akidah bersih, ibadah yang benar, dan berakhlak mulia. Melalui pembekalan dasar-dasar ilmu syar’i (Aqidah, Fiqih Ibadah, Manajemen Qolbu & Al Quran) serta pembiasaan ibadah dan tatacara hidup yang Islami.

*Info Biaya :*
Pendaftaran : Rp 150.000
Pendidikan : Rp 4.500.000

*Info link :*
https://bit.ly/daftarDQDT

*Kontak Person :* 
0819 1020 6060
0811 2000 480
`
btn = [{
 
 urlButton: {
displayText: 'Info Link',
url: 'https://bit.ly/daftarDQDT'
} },
{
 quickReplyButton: {
displayText: 'PKBM',
id: 'pkbm'
  },}]
  
  ikyy.send5ButImg(m.chat, menu,` ` , { url: dauroh } , btn)
  break
///
	case 'pmk':
menu =`*A1.3.1. Pesantren Masa Keemasan (PMK)*
*Daarut Tauhiid*

Program *Pesantren Masa Keemasan (PMK)* merupakan program pesantren mukim selama 40 hari untuk usia 45 tahun keatas. Tujuan program ini untuk mempersiapkan diri meraih husnul khotimah dengan ilmu aqidah, syariah dan pembiasaan ibadah harian yang istiqomah.

*Info Biaya :*
Investasi Program :
Pendaftaran : Rp 150.000
Pendidikan : Rp 8.000.000 (kapasitas kamar 2-4 orang)
*Tersedia kamar untuk 1 orang (terbatas)

*Info link :*
Web : https://daaruttauhiidvirtual.com/ 

*Kontak Person :* 
0819 1020 6060
`
btn = [{
 
 urlButton: {
displayText: 'Website',
url: 'https://daaruttauhiidvirtual.com/ '
},  
 quickReplyButton: {
displayText: 'PKBM',
id: 'pkbm'
  },
  }]
  
  ikyy.send5ButImg(m.chat, menu,` ` , { url: pmk } , btn)
	break
	////
	case 'ppm':
menu =`*A1.3.3.	Program Pesantren Mahasiswa*

Pesantren Daarut Tauhiid Bandung mengajak mahasiswa/i muslim se-Indonesia untuk bergabung dalam Program Pesantren Mahasiswa Virtual (PPM-V)

PPM-V merupakan program pesantren virtual selama 5 bulan khusus mahasiswa yang ingin mempelajari ilmu Syariah PLUS mahir berbahasa Arab & Inggris. 

Agenda Santri :
bit.ly/agendaPPMV

Investasi :
Rp 2.500.000 untuk program selama lima bulan

Link Pendaftaran :
https://daaruttauhiidvirtual.com/ppmv-dt

Informasi lebih lanjut :
0819 1020 6060
0811 2000 480

Instagram : 
https://instagram.com/ppm_dt`

btn = [{
 
 urlButton: {
displayText: 'Link Pendaftaran',
url: 'https://daaruttauhiidvirtual.com/ppmv-dt'
}, 
 urlButton: {
displayText: 'Instagram',
url: 'https://instagram.com/ppm_dt'

},  

 quickReplyButton: {
displayText: 'PKBM',
id: 'pkbm'
 } ,
  }]
  
  ikyy.send5ButImg(m.chat, menu,` ` , { url: ppm_i } , btn)
  break
	//// LST MESSAGE
	case 'baitulquran':
menu = `
*Baitul Quran (BQ)* merupakan unit pendidikan di bawah Lembaga Pesantren Daarut Tauhid yang fokus pada penyelenggaraan pendidikan di bidang Al Quran (Tahfidz dan Tahsin) `

let seeections = [

{
title: "  ",
rows: [ {title: `A1.2.1. STQ Mukim Takhassus 1 Tahun`,rowId: `stqmukimt1`, description: ``},
	
	{title: `A1.2.2. STQ Mukim Takhassus 3 Tahun`,rowId: `stqmukimt3`, description: ``},
	
{title: `A1.2.3. STQ Mukim Plus Kesetaraan`,rowId: `isi_kesetaraan`, description: ``},
	
{title: `A1.2.4. STQ Mukim Mahasiswa`,rowId: `stqmukimm`, description: ``},
	
{title: `A1.2.5. STQ Mukim Beasiswa Hafidz Tangguh`,rowId: `beasiswahafizh`, description: ``},
	
{title: `A1.2.6. STQ Weekend (Tahfidz Akhir Pekan)`,rowId: `stqweekend`, description: ``},
	
{title: `A1.2.7. Tahfidzul Quran Tematik (TQT)`,rowId: `tahfidzulquran`, description: ``},
	
{title: `A1.2.8. Bimbingan Baca Al-Qur’an (BBQ)`,rowId: `bimbinganbacaq`, description: ``},
	
{title: `A1.2.9. Dauroh Tahsin Al Quran`,
	rowId: `katalogdtq`, description: ``},
	
{title: `A1.2.10. Halaqoh Tahfidz Ramadhan`, rowId: `halaqahramadhan`, description: ``},] },]
ikyy.sendListMsg(m.chat, menu,  ` `, `${ucapaWaktu}\n`, `Click Here`, seeections, )

break

////
case 'paudsjenis':
  {
menu =`*A1.3.7. Satuan Paud Sejenis (SPS)*
`
btn = [{
 
 urlButton: {
displayText: 'Link Pendaftaran',
url: 'https://pesantrendt.org/pendaftaran/program/'
}
},  {
quickReplyButton: {
displayText: 'PKBM',
id: 'pkbm'
 } ,
  }]
  
  ikyy.send5ButImg(m.chat, menu,` ` , { url: paudsejenis } , btn)
  }
break
///
case 'dtenglish':
{
menu =`*A1.3.5. DT English*
DT English menawarkan satu teknologi berbentuk platform untuk mempermudah  belajar bahasa Inggris yang lebih efektif dan efisien dengan tetap mempertahankan fungsi sosial. 
.
Belajar bahasa inggris kapanpun dan dimanapun, dengan perpaduan online & offline class 📖
.
Ayo investasi kan segera diri kalian untuk mahir berbahasa inggris bersama DT ENGLISH

🌐 www.dtenglish.id 
📞  0821-2686-7850
✉️ dt.englishprogram@gmail.com

www.daaruttauhiidvirtual.com

Instagram:
https://instagram.com/pkbmdaaruttauhiid

No. Kontak
082111295553
`
btn = [{
 
 urlButton: {
displayText: 'Instagram',
url: 'https://pesantrendt.org/pendaftaran/program/'
}
},  {
quickReplyButton: {
displayText: 'PKBM',
id: 'pkbm'
 } ,
  }]
  
  ikyy.send5ButImg(m.chat, menu,` ` , { url: dtenglish } , btn)
	}
break
//
case 'kesetaraan':
{
menu =`*A1.3.4. Kesetaraan*
`
btn = [{
 
 urlButton: {
displayText: 'Link Pendaftaran',
url: 'https://pesantrendt.org/pendaftaran/program/'
}
}, {
  quickReplyButton: {
displayText: 'PKBM',
id: 'pkbm'
 } ,
  }]
  
  ikyy.send5ButImg(m.chat, menu,` ` , { url: kesetaraan } , btn)
}
	
break
case 'madrasahdiniyah':
{
menu =`*A1.3.6. Madrasah Diniyah Takmiliyah Awaliyah*
`
btn = [{
 
 urlButton: {
displayText: 'Link Pendaftaran',
url: 'https://pesantrendt.org/pendaftaran/program/',
quickReplyButton: {
displayText: 'PKBM',
id: 'pkbm'
},}}]
  
  ikyy.send5ButImg(m.chat, menu,` ` , { url: pesantren_gede } , btn)
	}
	
	
break
///
case 'pkbm':
	{
	menu = `A1.3* Pusat Kegiatan Belajar Masyarat PKBM
PKBM Daarut Tauhiid

Program kegiatan belajar masyarakat
www.daaruttauhiidvirtual.com

*Instagram:*
https://instagram.com/pkbmdaaruttauhiid

*No. Kontak*
082111295553`

let seeections = [

{
title: "  ",
rows: [ {title: `A1.3.1. Pesantren Masa Keemasan (PMK)`,rowId: `stqmukimt1`, description: ``},
	
	{title: `A1.3.2. Dauroh Qolbiyah (DQ)`,rowId: `stqmukimt1`, description: ``},
	
	{title: `A1.3.3. PPM`,rowId: `stqmukimt1`, description: ``},
	
	{title: `A1.3.4. Kesetaraan`,rowId: `stqmukimt1`, description: ``},
	
	{title: `A1.3.5. DT English`,rowId: `stqmukimt1`, description: ``},
	
	{title: `A1.3.6. Madrasah Diniyah Takmiliyah Awaliyah`,rowId: `stqmukimt1`, description: ``},
	
	{title: `A1.3.7. Satuan Paud Sejenis (SPS)`,rowId: `stqmukimt1`, description: ``},] },]
	
	ikyy.sendListMsg(m.chat, menu,  ` `, `${ucapaWaktu}\n`, `Click Here`, seeections, )
}

break
	
		 
  ///// TAMBHAN PENTING
  
  case 'tourl': {
	
m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await ikyy.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
  let anu = await TelegraPh(media)
  m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
  let anu = await UploadFileUgu(media)
  m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
	
	break





default:



if (/^=?>/.test(budy)){

	if (!isCreator) return m.reply(mess.owner)

  let parse = /^=>/.test(budy) ? budy.replace(/^=>/,'return') : budy.replace(/^>/,'')

  try{

 let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e })

 return reply(require('util').format(evaluate))

  } catch(e){

return reply(require('util').format(e))

 }
  }
if (budy.startsWith('$')) {
  if (!isCreator) return reply(mess.owner)
  exec(budy.slice(2), (err, stdout) => {
 if(err) return m.reply(err)
 if (stdout) return m.reply(stdout)
  })
}
}


} catch (err) {
m.reply(util.format(err))
}
			
		if (isCmd && budy.toLowerCase() != undefined) {
		if (m.chat.endsWith('broadcast')) return
		if (m.isBaileys) return
		let msgs = global.db.data.database
		if (!(budy.toLowerCase() in msgs)) return
		ikyy.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})