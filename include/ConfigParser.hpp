/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ConfigParser.hpp                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mafortin <mafortin@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/05/31 19:07:03 by mafortin          #+#    #+#             */
/*   Updated: 2022/05/31 22:16:52 by mafortin         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#pragma once
#include <string>
#include <vector>
#include <map>
#include <ServerParser.hpp>


class ConfigParser
{
public:
	ConfigParser(std::string config_file);
	~ConfigParser();
	class ConfigFileException : public std::exception{
		public:
			virtual const char* what() const throw();
	};
private:
	std::string					getContent(std::fstream& file);
	std::string					file_content;
	void						createConfig();
	std::vector<ServerParser>	serverparser;
};

std::string::iterator	findServerSep(std::string& content);
