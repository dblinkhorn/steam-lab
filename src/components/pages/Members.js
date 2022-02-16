import React, { useState } from 'react'
import VideoCard from '../VideoCard'
import './Members.css'
import {
  kinder_videos,
  first_videos,
  second_videos,
  third_videos,
  fourth_videos,
  fifth_videos,
  sixth_videos
} from '../videoData'


const Members = () => {

  // array of each video in selected grade
  const videosMap = (videos) => {
    return (
      videos.map(video =>
        <VideoCard
          key={ video.id }
          thumbnail={ video.thumbnail }
          title={ video.title }
          description={ video.description }
        />
      )
    )
  }

  // updates state of shown videos & page heading
  const handleGradeButtonClick = (videos, heading) => {
    setShowVideos(videosMap(videos))
    setVideosHeading(heading)
  }

  // controls state of which grade's videos to show
  const [showVideos, setShowVideos] = useState(videosMap(kinder_videos))
  // controls states heading to display depending on selected grade
  const [videosHeading, setVideosHeading] = useState('Kindergarten')

  return (
    <div className='members__container'>
      <div className='members__button-container'>
      {/* grades nav menu */}
      <ul className='members__grade-buttons'>
        <li>
          <button className='members__button'>All Videos</button>
        </li>
        <li>
          <button
            className='members__button'
            onClick={ () => {
              handleGradeButtonClick(kinder_videos, 'Kindergarten')
          }}>Kindergarten</button>
        </li>
        <li>
          <button
            className='members__button'
            onClick={ () => {
              handleGradeButtonClick(first_videos, 'Grade 1')
          }}>Grade 1</button>
        </li>
        <li>
          <button
            className='members__button'
            onClick={ () => {
              handleGradeButtonClick(second_videos, 'Grade 2')
          }}>Grade 2</button>
        </li>
        <li>
          <button
            className='members__button'
            onClick={ () => {
              handleGradeButtonClick(third_videos, 'Grade 3')
          }}>Grade 3</button>
        </li>
        <li>
          <button
            className='members__button'
            onClick={ () => {
              handleGradeButtonClick(fourth_videos, 'Grade 4')
          }}>Grade 4</button>
        </li>
        <li>
          <button
            className='members__button'
            onClick={ () => {
              handleGradeButtonClick(fifth_videos, 'Grade 5')
          }}>Grade 5</button>
        </li>
        <li>
          <button
            className='members__button'
            onClick={ () => {
              handleGradeButtonClick(sixth_videos, 'Grade 6')
          }}>Grade 6</button>
        </li>
      </ul>
      </div>
      <div className='members__videos-container'>
        <div className='members__videos-content-container'>
          <div className='members__heading'>
            { videosHeading }
          </div>
          <div className='members__videos'>
            { showVideos }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Members
