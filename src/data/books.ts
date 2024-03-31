import 'server-only'

export type Book = {
  title: string;
  author: string;
  review: string;
  image: string;
}

export const books: Book[] = [
    {
      title: 'To Kill A Mockingbird',
      author: 'Harper Lee',
      review: "Harper Lee's classic tale set in 1930s Alabama is perhaps the seminal text on racial tensions in the Deep South. The story follows the white lawyer Atticus Finch as he attempts to save the life of Tom Robinson, a Black man falsely accused of raping a white woman. The innocence of the narrator – Finch's six-year-old daughter, Scout – only serves to highlight the unfairness and incomprehensibility of the situation. A true American classic, To Kill A Mockingbird approaches the thorny issue of racism in the USA with humour, warmth and compassion, making it widely recognised as one of the greatest books of the twentieth century. Lee published a follow-up novel in 2015, Go Set A Watchman, which is set in the 1950s and shows the progression of the characters two decades on. It not only confirms the brilliance of To Kill A Mockingbird, but adds new context and meaning to the classic.",
      image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689690065-screenshot-2023-07-18-at-15-20-40-64b69fbe354c8.png?crop=0.9361046959199384xw:1xh;center,top&resize=980:*"
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      review: "Short but oh-so-sweet, F. Scott Fitzgerald's masterpiece has become synonymous with the Roaring Twenties and the death of the so-called American Dream. A modern tragedy, it charts the fall of Jay Gatsby, a newly minted millionaire, as he attempts to win back the love of his former sweetheart Daisy Buchanan, now married to another wealthy man. In his obsessive quest for wealth and status, as symbolised by Daisy, he neglects to see her true nature – which ultimately causes his downfall. Ironically, The Great Gatsby was not as much of a success as Fitzgerald's previous novels, This Side of Paradise and The Beautiful and the Damned. It was only posthumously that the book rose to prominence, and was even distributed freely amongst WWII American troops overseas to boost cultural morale. These days, it's regarded as Fitzgerland's magnum opus.",
      image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689690358-screenshot-2023-07-18-at-15-25-38-64b6a0e73c9e9.png?crop=0.9596199524940617xw:1xh;center,top&resize=980:*"
    },
    {
      title: 'Wuthering Heights',
      author: 'Emily Bronte',
      review: "No reading list would be complete without Emily Brontë's gothic romance, Wuthering Heights. Written in 1847 as a reaction to the popular romantic fiction of Jane Austen, it is an altogether darker and more complicated tale, set within a frame narrative and spanning two generations. Featuring some of the most beautiful prose in the English canon, it describes the destructive relationship between Catherine Earnshaw and Heathcliff, a foundling, amid the wild and feral atmosphere of the Yorkshire moors. Emily Brontë's sole published work, this evokes the violence of doomed romance and the creeping darkness of vengeance like no other novel.",
      image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689758274-screenshot-2023-07-19-at-10-17-34-64b7aa33ba35c.png?crop=0.9752198241406875xw:1xh;center,top&resize=980:*"
    },
    {
      title: 'The Handmaid\'s Tale',
      author: 'Margaret Atwood',
      review: "Set in a dystopian future, The Handmaid's Tale – now a major TV series – imagines a world in which an environmental catastrophe has led to the majority of the female population becoming infertile. When a fundamentalist religious group seizes control of what was once the USA, fertile women are rounded up and trained to be silent, nameless 'handmaids', forced to procreate with the men in power. An important feminist text, Margaret Atwood's novel explores the consequences of a reversal of women's rights. Atwood herself has said that when writing The Handmaid's Tale, she was scrupulous about including nothing that did not have a historical antecedent or a modern point of reference, making this much darker – and more horrifyingly real – than any other piece of science fiction.",
      image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689758810-screenshot-2023-07-19-at-10-26-24-64b7ac498a88f.png?crop=0.9886178861788617xw:1xh;center,top&resize=980:*",
    },
    {
      title: 'Things Fall Apart',
      author: 'Chinua Achebe',
      review: "Okonkwo is the greatest wrestler and warrior alive, and is famous throughout West Africa – but when he accidentally kills a clansman, his life begins to unravel. Okonkwo is exiled, and when he returns, he finds missionaries and colonial governors have arrived in his village. First published in 1958, Nigerian-born Chinua Achebe's novel reshaped both African and world literature, and has gone on to sell over 10 million copies in forty-five languages. If you love it as much as we do, you'll be glad to know it's part of a trilogy: two novels (Arrow of God and No Longer at Ease) follow on, chronicling the fate of this African community.",
      image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689759136-screenshot-2023-07-19-at-10-31-54-64b7ad932786b.png?crop=1.00xw:0.952xh;0,0.0346xh&resize=980:*",
    },
    {
      title: '1984',
      author: 'George Orwell',
      review: "Perhaps the most brilliant ever dystopian depiction of a totalitarian society, 1984 is as much a historical and cultural polemic as it is an absorbing thriller. Words from the novel have permeated our commonplace lexicon ('doublethink' and 'Big Brother' among them) and the book continues to be influential today. As the critic and author Jonathan Freedland wrote about 1984, \"it has become a shorthand for... the surveillance state, for the power of the mass media to manipulate public opinion, history and even the truth\". A book that encompasses freedom, betrayal and the power of protest, it\'s a cornerstone of British literature.",
      image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689759599-screenshot-2023-07-19-at-10-39-39-64b7af638c17e.png?crop=0.9878345498783455xw:1xh;center,top&resize=980:*"
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      review: "Austen\'s most famous novel - and arguably one of the most famous ever written in the English language – manages to be at once witty, wry, modern and timeless. Focused on the courtship of Elizabeth Bennet (one of the great feminist heroes of literature) and Fitzwilliam Darcy, this is much more than just a traditional love story, and is chock-full of laugh-out-loud characters, playfulness and irony. A great introduction to Austen, if you like this, we'd recommend Persuasion, another classic featuring a strong heroine.",
      image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1704985218-screenshot-2024-01-11-at-14-59-51-65a00270623e0.png?crop=0.993431855500821xw:1xh;center,top&resize=980:*"
    },
    {
      title: "Beloved",
      author: "Toni Morrison",
      review: "Part ghost story, part profound reflection on the evils of slavery, this Pulitzer-winning novel is American writer Morrison's crowning achievement. Dedicated to the ‘Sixty Million and more’ Africans and their descendants who died as a result of the slave trade, the novel is set in the mid-1800s, in the aftermath of the American Civil War. It tells the story of Sethe, abandoned by her sons and living with her youngest daughter in Cincinnati, traumatised by memories of her past life as a slave at Sweet Home in Kentucky. When another Sweet Home survivor appears at her door, it heralds the arrival of another: a mysterious woman, calling herself 'Beloved'. An astonishing feat of storytelling, Beloved interweaves ideas of motherhood, family, folklore and community with the horrors of history.",
      image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689760021-screenshot-2023-07-19-at-10-46-21-64b7b1069d7ac.png?crop=0.9918699186991871xw:1xh;center,top&resize=980:*"
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      review: "A witty and wise coming-of-age story, The Catcher in the Rye is a true timeless classic. It's Christmas and Holden Caulfield has just been expelled from yet another school. He floats around New York City seeking solace in fleeting encounters, always thinking of his younger sister Phoebe, the only person who really understands him. An elegy to teenage alienation, capturing the need for connection and the bewilderment of adolescence, this story is as relevant today as it was when it was first published in the 1950s.",
      image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689763369-screenshot-2023-07-19-at-11-41-02-64b7be144e7c6.png?crop=0.915xw:1.00xh;0.0801xw,0&resize=980:*"
    },
    {
      title: "Great Expectations",
      author: "Charles Dickens",
      review: "An orphaned child with little or no prospects, Pip expects very little from life. But Pip's narrow existence is blown apart when he finds an escaped criminal, is summoned to visit a mysterious old woman and meets the icy beauty, Estella. Most astoundingly of all, an anonymous person gives him money to begin a new life in London. Credited by some with inventing the detective novel and one of the most popular novelists of his day, Dickens remains one of the best-loved writers in the English language – if you're going to read any of his works, make it Great Expectations. If it gives you a taste for the author, we'd also recommend Oliver Twist, A Tale of Two Cities, and David Copperfield; the latter has recently reworked by Women's Prize for Fiction winner, Barbara Kingsolver.",
      image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689764069-screenshot-2023-07-19-at-11-49-33-64b7c0dab96ad.png?crop=0.969551282051282xw:1xh;center,top&resize=980:*"
    }
  ]