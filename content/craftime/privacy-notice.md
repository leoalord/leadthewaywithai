# CraftiMe Privacy Notice

**Notice version:** 1

**Effective date:** September 25, 2026

**Operator:** Lead The Way With AI LLC

**Privacy contact:** support@ltww.ai

CraftiMe — think “Craft Time” — helps caregivers and children make, learn and spend time together. Adults can collect ideas from supported websites and apps, or from photos they choose, turn them into craft instructions, and prepare for an activity together. This notice explains how we handle information when you use CraftiMe or contact us. “We” means Lead The Way With AI LLC.

CraftiMe is offered in the United States to adults aged 18 and over. Our [Terms of Use](https://www.leadthewaywithai.com/craftime/terms) also apply.

## Information we handle

**Your account.** When you use Sign in with Apple, Apple and our authentication provider, Google Firebase, process information needed to sign you in. We receive an account identifier and, when supplied, your email address, which may be an Apple private relay address. We do not receive your Apple password, and we do not keep your name. We associate your account with a private workspace, called a household in our systems.

**Your agreement.** We record which versions of the Terms of Use and this notice you agreed to, and when. This record is kept with your account. Earlier test versions of CraftiMe asked separately before AI imports and stored that choice with your account and on your phone; deleting your account removes it.

**Craft ideas and saved content.** We process the links you submit, content retrieved from those links, photos you choose to import, generated craft instructions, your edits, titles, materials, tags, source references and retained craft images from link imports. Depending on the source, retrieval and extraction can involve text, images, video, audio and linked instructions. We also store import status, drafts awaiting review and information needed to retry or complete an import or save. Your saved content also includes whether you marked a craft tried or a favorite, and your private note.

**Plans and materials.** We store crafts you add to your plan, materials you mark as needed, items you type into your materials list and their checked status. These records are associated with your account’s workspace.

**Information on your device.** CraftiMe keeps downloaded craft text, your plan and materials list, account session information, a copy of your agreement to the Terms and this notice, and account-scoped import/save records on your device. Craft images are kept in a small, size-limited cache in the app’s temporary storage on your device; that cache is cleared when the app next starts and when you sign out. Links you queue stay on your device until CraftiMe is open, signed in and online. Searching downloaded craft text happens on your device; we do not send those search terms to our server. Preparation checks and your current instruction-reader position are held only in the running app’s memory and are not sent to our server.

**Technical and support information.** Our hosting and authentication providers process technical information such as IP addresses, request timestamps and error information to deliver and protect the service. Our application and request logs also contain identifiers linked to your account: your workspace identifier, craft and import-job identifiers, and storage locations that include the workspace identifier. Error records can include the host name of a source image that could not be copied, and an unexpected service error can record fragments of the affected record, which can include a submitted link or craft text. If you contact us, we receive your message, contact details and any information you choose to include.

Please avoid including children’s names, faces, health information or other private family details in submitted links, photos or free-text fields. Source content can contain information about its creators or other people.

## How we use information

We use this information to sign you in, retrieve craft ideas, generate instructions, save and synchronize your crafts, maintain your plans and materials list, support offline reading, respond to requests, tell you about important changes to CraftiMe, such as the end of the beta, troubleshoot failures and protect the service. We may also process information when required to comply with law or resolve a legal claim.

## Your agreement to AI processing

Before you use your account, CraftiMe asks you to agree to the Terms of Use and this notice. That agreement covers sending what you import for retrieval and AI processing as described below. CraftiMe does not ask again before each import, and there is no separate AI import setting.

- Nothing you import is sent until you have agreed.
- We record the versions you agreed to and the time with your account. Our server refuses imports from an account without a current agreement.
- To stop CraftiMe processing what you import, stop importing or delete your account under **Profile → Delete account**. Imports already started will finish unless you delete your account.
- When we make a substantive change to the Terms of Use or this notice, we increase its version and ask you to agree again before you continue using your account. Corrections of typing or formatting do not change the version.

## What you import and where it goes

You can import links to Pinterest, Instagram, Facebook, TikTok and YouTube posts and videos and to public websites, by pasting them or sharing them from another app, and photos or screenshots you choose. A link you share from another app waits on this phone until CraftiMe is open, signed in and online. Photos are chosen with the system photo picker, so CraftiMe never gets access to your whole photo library or camera; the app removes location and other metadata and uploads them only when you tap Import. Only enabled sources can be imported, and a link from a source that is not enabled is refused before anything is retrieved.

When you import, what you chose is sent to CraftiMe’s servers on **Google Cloud**. Google Cloud and **Firebase** also run our sign-in, hosting, database and file storage. From our servers, your import goes to:

- **Google’s Gemini models on Vertex AI**, which read the source content (text, images, video and audio) or your photos and draft the craft instructions. We use Vertex AI’s global endpoint, so this processing may take place outside the United States. Under Google’s default settings, Google may cache model inputs in memory for up to 24 hours and may keep prompts flagged for possible abuse for up to 90 days. Generated instructions can be inaccurate; review them before using or saving them.
- **Apify**, which retrieves public Instagram, Facebook and TikTok posts for us. We send Apify only the post’s link. For TikTok videos and Facebook Reels, Apify stores a copy of the public video until CraftiMe downloads it. After each import we ask Apify to delete that retrieval’s data, and we retry if deletion cannot be confirmed; until then Apify holds it under its own retention policy and may process it outside the United States. Photos are never sent to Apify.
- **YouTube API Services**, which tell us whether a YouTube video is public and eligible and give us its channel name, which we show to credit the creator. We send YouTube only the video’s identifier. CraftiMe stores the channel name for a saved YouTube craft and refreshes or removes it within 30 days. By using CraftiMe, you agree to be bound by the [YouTube Terms of Service](https://www.youtube.com/t/terms), and Google handles that request under the [Google Privacy Policy](https://www.google.com/policies/privacy).
- **Pinterest and websites.** Our server retrieves Pinterest pins from Pinterest and fetches the websites you import, plus at most one linked instructions page when a page has little text. If our server cannot read a public page, it may ask Gemini’s URL-context tool to read it; Google may use its web index or fetch the live page. We do not use this to get past sign-in, membership, payment or email gates.

A public post can include its creator’s name, handle, image or voice; we use it to prepare your draft and credit the source. Importing does not give CraftiMe access to your social accounts, private messages, photo library or browsing history, and we never ask you to connect a social, YouTube or Google account. If you open an original source, its website or app handles your visit under its own privacy notice. Please import only content you are entitled to use, and avoid private links or material that reveals someone’s sensitive information.

We share information only with the service providers named in this notice, and only as needed for their services. Google and Apify process it for us under data processing terms that limit its use to providing their services to us and require them to keep it secure and confidential, so it receives the same or equal protection as this notice describes. YouTube, Pinterest and the websites you import receive only our server’s request for public content, not your account or device information.

We do not sell personal information, use it for targeted advertising, or track you across other companies’ apps and websites. CraftiMe contains no advertising or analytics software. Because we do not track you across other companies’ apps and websites, browser “Do Not Track” signals do not change how CraftiMe works. We do not allow other companies to collect information about your activity over time or across other apps and websites through CraftiMe.

We may disclose information where legally required, to respond to a lawful request, or when necessary to protect people and the security of the service. We limit such disclosures to what the circumstances require.

## Sharing

Your saved crafts are private to your account; CraftiMe does not publish them or offer a sharing feature. If you pass a craft or source link to someone yourself, deleting it in CraftiMe cannot recall their copy or remove the original creator’s post from its source platform.

## Keeping and deleting information

We retain account information and saved crafts while needed to provide your account and chosen features. Drafts waiting for review remain available until saved or deleted.

You can delete individual drafts and saved crafts using the app’s controls. Deleting a saved craft removes it from the library and plan, deletes its tried/favorite status and note, and starts cleanup of its retained cover. Deleting a draft removes its draft text. Materials-list items added from a deleted craft are removed on a best-effort basis, and some can remain stored. Related source links, job records and limited deletion records can remain to prevent retries from restoring deleted content and to manage cleanup.

If copying a saved craft’s cover image fails, CraftiMe keeps a private retry record and tries again a few times within about 15 minutes. If you delete the craft or your account in the meantime, the copy is abandoned and never saved. A small empty placeholder file, which contains no image, can remain in our storage until automatic cleanup removes it.

**Link imports.** Temporary source media downloaded by our import service is removed when the import job ends. The generated result is kept for 30 days after the import finishes; the job record and its source link remain until you delete the draft or your account. Printable PDFs are linked, not copied. Images retained with saved crafts and information held by service providers follow their own lifecycle.

**Photo imports.** Uploaded photos are deleted when the import finishes, fails or is discarded. Photos from an upload that is never completed are deleted about 15 minutes after the upload window closes. A safety rule deletes any submitted photo left in storage after one day.

**Storage and backups.** Files we delete remain in our storage provider’s 7-day recovery period before they are permanently removed. We do not make backups of our database.

**Logs.** Application and request logs are kept for 30 days. They contain account-linked identifiers and are not erased when you delete your account. Google Cloud’s required audit logs, which record administrative activity on our systems, are kept for 400 days.

**Deleting your account.** You can delete your account in the app under **Profile → Delete account**; you need to be online. Deleting your account permanently removes your household’s saved crafts, drafts, imports, plans and materials lists, the files stored for your household including uploaded photos and retained craft images, your agreement record, your sign-in account, and the CraftiMe data kept on the phone you delete from, including unopened shared links. If you use Sign in with Apple, CraftiMe asks you to sign in with Apple again and revokes its Sign in with Apple authorization before anything is deleted. If the connection drops or the app closes during deletion, CraftiMe finishes removing this phone’s copy the next time it opens, and it removes only the deleted account’s data. A short deletion receipt is kept for 24 hours so an interrupted request can finish, and is then removed automatically, usually within a further day. Logs and copies held by service providers follow their own retention periods.

Signing out or uninstalling the app does not, by itself, delete your account or server-held information. Local copies and device backups can have a separate lifecycle from server data.

## Your choices and rights

You can choose which links and photos to import, and edit or remove supported saved content. Deleting your account withdraws your agreement to AI processing. You can contact support@ltww.ai to ask about your information or request access, correction or deletion. We may ask for information needed to verify that the request concerns your account.

Depending on where you live, you may also have rights to obtain a copy of your information, restrict or object to certain processing, withdraw consent where processing relies on consent, and complain to a privacy regulator. Withdrawal does not affect processing already lawfully carried out.

## Children

CraftiMe supports activities that caregivers and children do together. Accounts are for adults aged 18 and over. CraftiMe is not directed to children, and we do not knowingly collect personal information from children. The account and import workflow is designed for the caregiver; a child does not need a separate account or profile to take part in the activity. We do not ask for a child’s name, birthday, school or health information to create a craft.

Caregivers should avoid putting identifying information about children in imported links, photos, edits or support messages. If you believe we have received a child’s personal information inappropriately, contact support@ltww.ai so we can investigate and address it.

## Security and where information is processed

Information is encrypted in transit and at rest by our hosting provider, and we use authenticated access and account/workspace access controls to protect it. No storage or transmission method can guarantee absolute security.

CraftiMe is offered only in the United States. Our application servers, database and file storage are in the United States. Some information may be processed or stored outside the United States: AI processing uses Google’s global endpoint, our logs use Google Cloud’s global logging location, and other providers, including Apify and Google’s sign-in service, may process information in other countries.

## Changes and contact

We will update this notice when our practices change, revise the effective date and increase the notice version for any substantive change. When the version increases, CraftiMe asks you to agree again before you continue using your account.

For privacy questions, requests or complaints, contact **support@ltww.ai**. Tell us which account or information your concern relates to, without sending passwords or unnecessary sensitive information. We will investigate and respond within the period required by applicable law. Where available, you may also complain to your local privacy regulator.
