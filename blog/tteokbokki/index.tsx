import React from 'react'
import { BlockQuote, Paragraph, PostMain, Ftl, Footnote } from '../post';
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root')!);
root.render(
    <PostMain data={{
        title: "I Want to Die but I Want to Eat Tteokbokki",
        image: "/public/blog/tteokbokki.jpg",
        type: "book",
        metadata:
            (<div>
                <p>Written by Baek Se-hee</p>
                <p>Translated by Anton Hur</p>
                <p>Published Nov. 2022 (English)</p>
            </div>)
    }}>
        <Paragraph>
            <i>I Want to Die but I want to Eat Tteobokki</i> is a very specific book. Though the purpose is ostensibly the same as every other self-help book (opening with "I hope you find points of connection between you and me on these pages. My desire to be of help and consolation is as powerful as ever"),<Ftl i="1"/> it feels improper and at times reductive to classify it underneath this umbrella. A self-help book is general, a series of polished stories and anecdotes to further some life lesson that promises to understand the reader and offer a panacea to whatever problem they are facing.<Ftl i="2"/> <i>I Want to Die but I want to Eat Tteobokki</i> does not offer any such solutions, and is better because of it. 
        </Paragraph>
        <Paragraph>
            Each chapter is a transcript of a meeting between the author and her psychiatrist, with a small reflection at the end. The topic is almost always a small incident, with the psychiatrist trying to provide her with some insight or alternate perspective. These are, at times, a bit stilted and cringe-inducing.<Ftl i="3"/> However, they never cross into being preachy or self-indulgent as the book is not really about or even for the reader. Every reflection centers around the author alone: her working through her own thoughts and her own history. Every transcript features only the nameless "psychiatrist" and "me," and all other characters are defined solely by their relationship ("my old sister," "my friend"). These are explained as being recorded for herself, as she "kept failing to remember the things that were said in conversations because [she] was so nervous in the moment."<Ftl i="4"/> This is not to say that the book is inherently unrelatable or even impersonal; I just did not see myself in it. But it is this devotion to herself and her refusal to co-opt some generic heartwarming message that the book succeeds.
        </Paragraph>
        <Paragraph>
            I like this book because it lets the author's dysthymia exist unmarred. We watch her stagnate across the pages, and while she is undoubtedly more cognizant at the end, at no point does she become "fixed." It is a struggle against the same few core issues (a black-and-white worldview and low self-esteem) in practically every chapter. She only changes in that she becomes more aware of them, but never fully drops the tendencies. This homogenous feeling gives the illusion that the transcripts were taken back-to-back, but it is revealed at the very end (and not even by her) that the book spans over a ten year period. Though this continuous structure, the chapters mirror how depression cannot be discretized into a set of well-defined partitions - there is never a "I've solved this issue, time to move onto the next." It is only appropriate then, that even after a decade of therapy, the epilogue closes with a wish.
        </Paragraph>
        <BlockQuote>
            <p>I want to love and be loved. I want to find a way where I don't hurt myself. I want to live a life where I say things are good more than things are bad. I want to keep failing and discovering new and better directions. I want to enjoy the tides of feeling in me as the rhythms of life. I want to be the kind of person who can walk inside the vast darkness and find the one fragment of sunlight I can linger in for a long time.</p>
            <p>Some day, I will.<Ftl i="5"/></p>
        </BlockQuote>
        <Paragraph>
            I did not find this book to be life-changing nor even especially enthralling. But depression is not a three stage act, and so neither should this book be. <i>I Want to Die but I want to Eat Tteobokki</i> is very specific, but for that specific audience, it is quite good.
        </Paragraph>
        <div className='w-full h-[1px] bg-off-white my-2'></div>
        <Footnote i="1">Forward, <i>To the Readers of the English Edition</i>.</Footnote>
        <Footnote i="2">Can you tell I'm not a big fan of this genre.</Footnote>
        <Footnote i="3">The psychiatrist too can come off as a bit cold and authoritarian, and not all of the insights they provide are particularly insightful.</Footnote>
        <Footnote i="4">Chapter 3, <i>I'm Under Constant Surveillance</i>.</Footnote>
        <Footnote i="5">Chapter 13, <i>Epilogue: It's Okay, Those Who Don't Face Darkness Can Never Appreciate the Light</i>.</Footnote>
    </PostMain>
);