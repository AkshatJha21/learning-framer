import { useScroll, motion, useSpring, useTransform } from 'framer-motion'
import React from 'react'

const ScrollAnimations = () => {
    const { scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress);
    const background = useTransform(
        scrollYProgress, 
        [0, 1],
        ["rgb(86, 1, 245)", "rgb(1, 245, 13)"]
    );
  return (
    <div>
        <motion.div 
            style={{
                background,
                // scaleX: scrollYProgress,
                scaleX,
                transformOrigin: "left",
                position: "sticky",
                top: 0,
                width: "100%",
                height: "20px",
            }}
        />
        <div 
            style={{
                maxWidth: "700px",
                margin: "auto"
            }}
        >
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati veritatis labore beatae corrupti blanditiis deserunt ipsum aperiam debitis rerum iure natus esse adipisci, eum, sit cum delectus veniam facilis sint eos. Dolore, eveniet fugiat, illo natus magni rem placeat enim debitis nihil error autem incidunt sapiente? Facere veniam officia blanditiis. Beatae deserunt magni vel, maiores asperiores culpa molestias sapiente, saepe earum animi quia voluptatibus! Autem placeat sunt inventore delectus, neque laudantium ullam doloremque et sit est explicabo fugit aspernatur, at vel libero qui, voluptatibus natus nam aperiam! Praesentium unde, eius culpa possimus vitae labore, natus nam excepturi deserunt officiis mollitia!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati veritatis labore beatae corrupti blanditiis deserunt ipsum aperiam debitis rerum iure natus esse adipisci, eum, sit cum delectus veniam facilis sint eos. Dolore, eveniet fugiat, illo natus magni rem placeat enim debitis nihil error autem incidunt sapiente? Facere veniam officia blanditiis. Beatae deserunt magni vel, maiores asperiores culpa molestias sapiente, saepe earum animi quia voluptatibus! Autem placeat sunt inventore delectus, neque laudantium ullam doloremque et sit est explicabo fugit aspernatur, at vel libero qui, voluptatibus natus nam aperiam! Praesentium unde, eius culpa possimus vitae labore, natus nam excepturi deserunt officiis mollitia!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati veritatis labore beatae corrupti blanditiis deserunt ipsum aperiam debitis rerum iure natus esse adipisci, eum, sit cum delectus veniam facilis sint eos. Dolore, eveniet fugiat, illo natus magni rem placeat enim debitis nihil error autem incidunt sapiente? Facere veniam officia blanditiis. Beatae deserunt magni vel, maiores asperiores culpa molestias sapiente, saepe earum animi quia voluptatibus! Autem placeat sunt inventore delectus, neque laudantium ullam doloremque et sit est explicabo fugit aspernatur, at vel libero qui, voluptatibus natus nam aperiam! Praesentium unde, eius culpa possimus vitae labore, natus nam excepturi deserunt officiis mollitia!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati veritatis labore beatae corrupti blanditiis deserunt ipsum aperiam debitis rerum iure natus esse adipisci, eum, sit cum delectus veniam facilis sint eos. Dolore, eveniet fugiat, illo natus magni rem placeat enim debitis nihil error autem incidunt sapiente? Facere veniam officia blanditiis. Beatae deserunt magni vel, maiores asperiores culpa molestias sapiente, saepe earum animi quia voluptatibus! Autem placeat sunt inventore delectus, neque laudantium ullam doloremque et sit est explicabo fugit aspernatur, at vel libero qui, voluptatibus natus nam aperiam! Praesentium unde, eius culpa possimus vitae labore, natus nam excepturi deserunt officiis mollitia!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati veritatis labore beatae corrupti blanditiis deserunt ipsum aperiam debitis rerum iure natus esse adipisci, eum, sit cum delectus veniam facilis sint eos. Dolore, eveniet fugiat, illo natus magni rem placeat enim debitis nihil error autem incidunt sapiente? Facere veniam officia blanditiis. Beatae deserunt magni vel, maiores asperiores culpa molestias sapiente, saepe earum animi quia voluptatibus! Autem placeat sunt inventore delectus, neque laudantium ullam doloremque et sit est explicabo fugit aspernatur, at vel libero qui, voluptatibus natus nam aperiam! Praesentium unde, eius culpa possimus vitae labore, natus nam excepturi deserunt officiis mollitia!</p>
        </div>
    </div>
  )
}

export default ScrollAnimations