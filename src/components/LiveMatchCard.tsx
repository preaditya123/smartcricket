
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface TeamScore {
  name: string;
  shortName: string;
  runs: number;
  wickets: number;
  overs: string;
}

export interface MatchProps {
  id: string;
  team1: TeamScore;
  team2: TeamScore;
  status: "live" | "completed";
  venue: string;
  time: string;
  series: string;
  result?: string;
  battingTeam?: "team1" | "team2";
}

const LiveMatchCard: React.FC<MatchProps> = ({
  id,
  team1,
  team2,
  status,
  venue,
  time,
  series,
  result,
  battingTeam
}) => {
  const getStatusClass = () => {
    switch (status) {
      case "live":
        return "status-live";
      case "completed":
        return "status-completed";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "live":
        return "LIVE";
      case "completed":
        return "COMPLETED";
    }
  };

  return (
    <Link to={`/match/${id}`}>
      <Card className="cricket-card h-full">
        <CardContent className="pt-3 pb-1"> {/* Reduced padding top from pt-4 to pt-3 */}
          <div className="flex justify-between items-center mb-1"> {/* Reduced margin bottom from mb-2 to mb-1 */}
            <span className="text-xs text-gray-500">{series}</span>
            <span className={getStatusClass()}>{getStatusText()}</span>
          </div>
          
          <div className="space-y-2"> {/* Reduced spacing from space-y-3 to space-y-2 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-7 h-7 bg-cricket-gray rounded-full flex items-center justify-center"> {/* Reduced size from w-8 h-8 to w-7 h-7 */}
                  <span className="text-xs font-bold">{team1.shortName}</span>
                </div>
                <span className="team-name">{team1.name}</span>
              </div>
              <div className="flex items-center">
                <span className={`score ${battingTeam === "team1" ? "text-cricket-red" : ""}`}>
                  {`${team1.runs}/${team1.wickets}`}
                </span>
                <span className="text-xs text-gray-500 ml-2">
                  {battingTeam === "team1" ? `(${team1.overs})` : ""}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-7 h-7 bg-cricket-gray rounded-full flex items-center justify-center"> {/* Reduced size from w-8 h-8 to w-7 h-7 */}
                  <span className="text-xs font-bold">{team2.shortName}</span>
                </div>
                <span className="team-name">{team2.name}</span>
              </div>
              <div className="flex items-center">
                <span className={`score ${battingTeam === "team2" ? "text-cricket-red" : ""}`}>
                  {`${team2.runs}/${team2.wickets}`}
                </span>
                <span className="text-xs text-gray-500 ml-2">
                  {battingTeam === "team2" ? `(${team2.overs})` : ""}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-2 pb-2"> {/* Reduced padding from pt-3 pb-3 to pt-2 pb-2 */}
          <div className="w-full">
            <p className="text-xs text-gray-500">{venue}</p>
            {result && <p className="text-sm font-medium mt-1">{result}</p>}
            {status === "live" && (
              <Badge variant="outline" className="mt-1 bg-cricket-green/10 text-cricket-green border-cricket-green"> {/* Reduced margin top from mt-2 to mt-1 */}
                Watch Live
              </Badge>
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default LiveMatchCard;
