/**
 * Mailchimpov "connected site" kod — samo javlja Mailchimpu da je ovaj sajt
 * spojen na njihov račun (za "Check Connection" u čarobnjaku i za buduće
 * pop-up forme). Ne prikazuje ništa sam od sebe i ne pokreće nijednu formu —
 * to radi zaseban trigger vezan uz klik i uz pristanak na kolačiće.
 *
 * NAMJERNO obična <script> oznaka, ne Next.js <Script> komponenta — Next
 * potonju pretvara u interni "__next_s" zapis koji tek JavaScript naknadno
 * pretvori u pravu skriptu, pa je nema u sirovom HTML-u. Mailchimpov
 * provjeritelj dohvaća samo sirovi HTML i traži doslovan <script> tag, pa bez
 * ove izmjene "Check Connection" nikad ne prolazi.
 */
export default function MailchimpConnect() {
  return (
    <script
      id="mcjs"
      dangerouslySetInnerHTML={{
        __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/27618132505d7ef241008a067/a1561daeb780facf3756c343f.js");`,
      }}
    />
  )
}
