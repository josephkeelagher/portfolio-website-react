import React from 'react'
import Card from './Card'

const Projects = () => {
  return (
    <section id="projects">
        <h1 className="projects__title">Projects</h1>
        <div className="projects__content">
            <Card image="src\assets\Langwarrin logo.png" title="Community Centre Website" description="Dynamic website and admin portal created for use by Langwarrin Community Centre." link="https://youtu.be/3IlSPfrMHJY"></Card>
            <Card image="src\assets\AI project.png"title="AI Gameplay Agent" description="AI 'perfect play' agent for the fictional game 'Tetress' based on Tetris. Utilises adversarial alpha beta search accompanied by other pruning and optimisation techniques to provide efficient computation." link="https://github.com/josephkeelagher/AI-Tetress-Agent"></Card>
            <Card image="src\assets\IMDB project.png" title="IMDB Rating Predictor" description="Leverages Data Analysis and Pre-Processing techniques with powerful Machine Learning algorithms like RandomForest & GradientBoosting to predict IMDB Movie Ratings with +75% accuracy." link="https://github.com/josephkeelagher/IMDB-Predictor-Machine-Learning"></Card>
            <Card image="src\assets\Operation Deep.png" title="Unity Action FPS Game 'OPERATION: DEEP'" description='Eerie-Action genre PC Game built in Unity. Play as a secret agent to solve puzzles and shoot monsters!' link="https://www.youtube.com/watch?v=MihKI0ddxDA"></Card>
            <Card image="src\assets\ML Project.png" title="AFL Medal Predictor" description='Leverages machine learning and an AFL player dataset to predict the 2022 AFL Brownlow medal winner.' link="https://github.com/josephkeelagher/AFL-brownlow-predictor"></Card>
            <Card image="src\assets\SHADOW DANCE.png" title="Java Rhythm Game 'SHADOWDANCE'" description='Using BAGEL and MAVEN libraries I built a keyboard oriented rhythm game with multiple levels.' link="https://github.com/josephkeelagher/ShadowDance-game"></Card>
        </div>
    </section>
  )
}

export default Projects