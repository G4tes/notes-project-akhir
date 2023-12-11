import { createSlice } from '@reduxjs/toolkit';

type Note = {
  id: number;
  title: string;
  content: string;
  createdAt: string | number;
};

type notesState = {
  notes: Note[];
  searchNotes: boolean | string;
  loading: boolean;
  indexOpen: number;
  error: null | string;
};

const initialState: notesState = {
  notes: [
    {
      id: 0,
      title: 'YNW Melly - Suicidal',
      content:
        "Suicidal, your love is suicidal<br />And lately, I've been feeling suicidal<br />Your love is suicidal<br />I thought that we were meant to be<br />You took my heart and made it bleed<br />I gave you all my ecstasy<br />I know you'll be the death of me (Keep it Z3N)<br />Left lipstick on my Hennessy<br />Felt like you took my soul from me<br />You gave me all your ecstasy<br />I thought that we were meant to be<br />Your love is suicidal<br />For me, your love is suicidal<br />To me your love is suicidal<br />To me your love is suicidal<br />I'm sippin' Hennessy (ooh)<br />I'm sippin' Hennessy (ooh)<br />I don't want to lose my conscience<br />Drinkin' all this Hennessy<br />Baby, you took control of me<br />And I got too many enemies<br />I knew you wanted to fuck him 'cause I couldn't tell<br />Check my bag, now I'm, now I'm in my bag, yeah<br />You did me bad, you did me bad<br />But I said, \"Fuck it\" and I ran up my bag, yeah<br />I'm in my bag, I'm in my bag now<br />But you didn't even put it all on the line<br />For me, no, oh, I'm sorry<br />This is the end of us, it's crazy 'cause my heart is dangerous<br />Felt like you took my soul from me<br />Like the devil got a hold on me<br />Everybody wishin' bad on me<br />Everybody wishin' bad on me<br />You taught a lesson to me that I had to learn<br />And I'm so sorry 'cause you let our bridges burn<br />I said, \"I loved you\" and I wish I never did<br />I swear to God, I swear to God, you stupid bitch<br />I thought that we were meant to be<br />You took my heart and made it bleed<br />I gave you all my ecstasy<br />I know you'll be the death of me<br />Left lipstick on my Hennessy<br />Felt like you took my soul from me<br />No way, I gave you all my ecstasy<br />I thought that you were meant for me<br />I know you'll be the death of me<br />Thought we were for eternity<br />You fucked me up, both physically<br />And mentally, I can't believe<br />I'm sippin' Hennessy (ooh)<br />I'm sippin' Hennessy (ooh)<br />I'm sippin' Hennessy (ooh)<br />I'm sippin' Hennessy (ooh)<br />Your love is suicidal<br />For me, your love is suicidal<br />To me your love is suicidal<br />To me your love is suicidal<br />You taught a lesson to me that I had to learn<br />And I'm so sorry 'cause you let our bridges burn<br />I said, \"I loved you\" and I wish I never did<br />I swear to God, I swear to God, you stupid bitch",
      createdAt: 1702304502788
    },
    {
      id: 1,
      title: 'YNW Melly - Murder On My Mind',
      content:
        "Get to roll no...<br />Ayy, I'm in the studio, bro<br />Oh, nah, yeah, call me, ball me<br />Yeah, I'll... bet<br />Yeah, I'm at the studio, hold up though<br />I ain't get to roll no weed, I ain't get to roll no Swishers<br />I was locked up on Christmas, ain't get to see my niggas<br />Ain't get to hug my mama, couldn't even give her no kisses<br />Can't even post on my Instagram 'cause these pussy niggas be snitching<br />Everybody acting suspicious, might probably say that I'm tripping<br />When I'm all alone in my jail cell, I tend to get in my feelings<br />And all I smoke is that loud, don't pass me no midget<br />And I'ma smoke all of my pain away, 'cause that's the only thing that gon' heal it<br />I don't understand these women who go around pretending<br />As if they really fuck with me, so I love 'em all from a distance<br />'Cause the same bitch say she down to ride be the main one who tricking<br />Got Molly mixed with promethazine 'cause every time<br />I wake up in the morning, I got murder on my mind<br />AK-47's, MAC-11, Glocks, and .9s<br />And all these pussy niggas hating, tryna knock me off my grind<br />But I can't let 'em do it, I got murder on my mind<br />Bitch, I got murder on my mind (bitch, I got murder on my mind)<br />I got murder on my mind (on my mind)<br />I got murder on my mind (I got murder on my mind)<br />I got murder on my mind, I got murder on my mind<br />Yellow tape around his body, it's a fucking homicide<br />His face is on a T-shirt and his family traumatized<br />I didn't even mean to shoot him, he just caught me by surprise<br />I reloaded my pistol, cocked it back, and shot him twice<br />His body dropped down to the floor, and he got teardrops in his eyes<br />He grabbed me by my hands and said he was afraid to die<br />I told him, \"It's too late, my friend, it's time to say goodbye\"<br />And he died inside my arms, blood all on my shirt<br />Wake up in the morning, I got murder on my mind<br />AK-47's, MAC-11, Glocks, and .9s<br />And all these pussy niggas hating, tryna knock me off my grind<br />But I can't let 'em do it, I got murder on my mind<br />Bitch, I got murder on my mind (bitch, I got murder on my mind)<br />I got murder on my mind (on my mind)<br />I got murder on my mind<br />I got murder on my mind, I got murder on my mind<br />(I got murder on my mind)<br />Bite like tarantula, bitch, I'm an animal<br />Melly's a savage, no he not no amateur<br />Bad bitch named Angela, fucked her on camera<br />Bitch I'm a murderer (yeah, yeah)<br />I might just kill the boy, don't wanna kill the boy<br />Bake him up, say he want beef, we gon' grill the boy<br />(Grill the boy, we gonna grill the boy)<br />I'm bleeding so good, I might dip his ass in it and spill the boy<br />Haha, murder on my mind, whoa, whoa<br />I got murder on my mind (on my mind)<br />I got murder on my mind, I got murder on my mind, huh<br />Wake up in the morning, I got murder on my mind<br />AK-47's, MAC-11, Glocks, and .9s<br />And all these pussy niggas hating, tryna knock me off my grind<br />But I can't let 'em do it, I got murder on my mind<br />Bitch, I got murder on my mind<br />I got murder on my mind<br />I got murder on my mind<br />I got murder on my mind, I got murder on my mind<br />(Murder on my mind)<br />Whoa-oh-oh-oh<br />Young Nigga World, bitch<br />Whoa-oh-oh-oh<br />",
      createdAt: 1702304536064
    },
    {
      id: 2,
      title: 'Juice WRLD - All Girls Are The Same',
      content:
        "Mmm, they're rottin' my brain, love<br />These hoes are the same<br />I admit it, another ho got me finished<br />Broke my heart, oh, no, you didn't<br />Fuck sippin', I'ma down a whole bottle<br />Hard liquor, hard truth, can't swallow<br />Need a bartender, put me out my sorrow<br />Wake up the next day in the Monte Carlo<br />With a new woman, tell me she from Colorado<br />And she love women, she'll be gone by tomorrow<br />Who am I kiddin'?<br />All this jealousy and agony that I sit in<br />I'm a jealous boy, really feel like John Lennon<br />I just want real love, guess it's been a minute<br />Pissed off from the way that I don't fit in<br />I don't fit in<br />Tell me what's the secret to love, I don't get it<br />Feel like I be runnin' a race, I'm not winnin'<br />Ran into the devil today and she grinnin'<br />Hey, these girls are insane<br />Uh, all girls are the same<br />They're rottin' my brain, love<br />Think I need a change<br />Before I go insane, love<br />All girls are the same<br />They're rottin' my brain, love<br />Think I need a change<br />Before I go insane, love<br />Ten minutes, she told me it would take ten minutes<br />To break my heart, oh no, she didn't<br />Fuck livin', I'ma drown in my sorrow<br />Fuck givin', I'ma take not borrow<br />And I'm still sinnin', I'm still losin' my mind<br />I know I been trippin', I'm still wastin' my time<br />All the time given, am I dyin'? Am I livin'?<br />It's fuck feelings, my sorrow go up to the ceilin'<br />Ah, now I am insane<br />Demons in my brain, love<br />Peace I can't attain<br />'Cause all these girls the same, love<br />Now I am insane<br />Demons in my brain, love<br />Peace I can't attain<br />'Cause all these girls the same, love<br />",
      createdAt: 1702304600675
    },
    {
      id: 3,
      title: 'Juice WRLD & The Weeknd - Smile',
      content:
        "I'd do anything in my power, to see you just smile<br />I want you to prosper, and come proper<br />Even if that means I ain't by your side<br />I'd do anything in my power, to see you just smile<br />I want you to prosper, and come proper<br />Even if that means I ain't by your side<br />Devil on my shoulder telling me I'll die soon<br />I don't really want that to impact you<br />But I don't know, maybe I'm just paranoid<br />I just want the best for you, I just want what's left of you<br />Oh, you tell me that you're sad inside<br />I'm sad that I can't satisfy<br />Yeah, I pray that I'll get it right this time<br />Maybe we'll be alright<br />Oh, you tell me that you're sad inside<br />I'm sad that I can't satisfy<br />Yeah, I pray that I'll get it right this time<br />Maybe we'll be alright<br />I'd do anything in my power, to see you just smile<br />I want you to prosper, and come proper<br />Even if that means I ain't by your side<br />I'd do anything in my power, to see you just smile<br />I want you to prosper, and come proper<br />Even if that means I ain't by your side<br />Oh, yeah, I just want to see you smile (you smile)<br />Don't cry (don't cry)<br />Even though it means I gotta let you go (you go)<br />Depending on you, gotta learn to be alone ('lone)<br />'Cause I'm so desensitized<br />When our skin is touching (yeah), I need d- to love you (yeah)<br />You want so much more for me, but I can only f- you (you)<br />I spent everyday right beside you (side you), side you (side you)<br />A hundred pics of me on your phone<br />Now you're someone that I used to know<br />At this point, we playing with fire (fire), fire (fire)<br />You don't wanna see what's in my phone<br />It's just gonna hurt you more<br />I'd do anything in my power, to see you just smile (oh yeah)<br />I want you to prosper, and come proper<br />Even if that means I ain't by your side (oh, oh)<br />I'd do anything in my power, to see you just smile<br />I want you to prosper, and come proper<br />Even if that means I ain't by your side<br />",
      createdAt: 1702304728327
    }
  ],
  searchNotes: false,
  loading: false,
  indexOpen: -1,
  error: null
};

export const notesSlice = createSlice({
  initialState,
  name: 'notesSlice',
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    removeNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.createdAt !== action.payload);
    },
    setSearchNotes: (state, action) => {
      state.searchNotes = action.payload;
    },
    handleIndexOpen: (state, action) => {
      state.indexOpen = action.payload;
    }
  }
});

export const { addNote, removeNote, setSearchNotes, handleIndexOpen } = notesSlice.actions;
