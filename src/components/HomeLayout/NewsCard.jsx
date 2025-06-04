import React from 'react';
import { FaStar, FaEye, FaBookmark, FaShareAlt } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    tags
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <div className="card bg-base-100 shadow-xl gap-1 mx-auto">
      <div className="card-body">
        {/* Author Section */}
        <div className="flex bg-base-200 items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={author.img} alt={author.name} />
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm">{author.name}</h4>
              <p className="text-xs text-gray-500">{formattedDate}</p>
            </div>
          </div>
          <div className="text-gray-400 cursor-pointer text-xl flex gap-1 "><FaBookmark />
          <FaShareAlt />
          </div>
        </div>

        {/* Title */}
        <h2 className="card-title text-base md:text-lg">{title}</h2>

        {/* Image */}
        <figure className="mt-3">
          <img src={thumbnail_url} alt="news thumbnail" className="rounded-xl max-h-48 object-cover w-full" />
        </figure>

        {/* Description */}
        <p className="text-sm text-gray-700 line-clamp-4 mt-2">
          {details}
        </p>

        {/* Read More */}
        <a className="text-primary font-medium mt-2 inline-block cursor-pointer">Read More</a>

        {/* Rating & Views */}
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-1 text-warning">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < rating.number ? 'text-warning' : 'text-gray-300'} />
            ))}
            <span className="text-gray-800 ml-2 text-sm">{rating.number}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <div key={index} className="badge badge-ghost text-xs">{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
